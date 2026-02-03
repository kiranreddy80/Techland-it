import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PROJECT_ROOT = path.resolve(__dirname, "..");
const CDN_IMAGES_DIR = path.join(
  PROJECT_ROOT,
  "public",
  "assets",
  "cdn-images"
);
const SRC_DIR = path.join(PROJECT_ROOT, "src");

// Create directory for CDN images
if (!fs.existsSync(CDN_IMAGES_DIR)) {
  fs.mkdirSync(CDN_IMAGES_DIR, { recursive: true });
}

// Track downloaded images
const downloadedImages = new Map();

function getFileExtension(url) {
  try {
    const urlPath = new URL(url).pathname;
    const ext = path.extname(urlPath);
    return ext || ".png";
  } catch {
    return ".png";
  }
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    if (downloadedImages.has(url)) {
      resolve(downloadedImages.get(url));
      return;
    }

    try {
      // Create a hash of the URL for unique filename
      const urlHash = crypto
        .createHash("md5")
        .update(url)
        .digest("hex")
        .substring(0, 10);

      // Get file extension
      const ext = getFileExtension(url);

      // Create filename
      const filename = `cdn_${urlHash}${ext}`;
      const localPath = path.join(CDN_IMAGES_DIR, filename);

      // Check if already exists
      if (fs.existsSync(localPath)) {
        console.log(`Already exists: ${filename}`);
        const relativePath = `/assets/cdn-images/${filename}`;
        downloadedImages.set(url, relativePath);
        resolve(relativePath);
        return;
      }

      console.log(`Downloading: ${url}`);

      const protocol = url.startsWith("https") ? https : http;
      const file = fs.createWriteStream(localPath);

      protocol
        .get(url, (response) => {
          if (response.statusCode !== 200) {
            reject(new Error(`Failed to download: ${response.statusCode}`));
            return;
          }

          response.pipe(file);

          file.on("finish", () => {
            file.close();
            console.log(`  Saved to: ${filename}`);
            const relativePath = `/assets/cdn-images/${filename}`;
            downloadedImages.set(url, relativePath);
            resolve(relativePath);
          });
        })
        .on("error", (err) => {
          fs.unlink(localPath, () => {});
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
}

async function processFile(filepath) {
  try {
    const content = fs.readFileSync(filepath, "utf-8");
    let newContent = content;

    // Find all image CDN URLs (common patterns)
    const patterns = [
      /https:\/\/img\.icons8\.com\/[^\s'"]+/g,
      /https:\/\/cdn\.jsdelivr\.net\/[^\s'"]+/g,
      /https:\/\/webstrot\.com\/[^\s'"]+\.(?:png|jpg|jpeg|gif|svg)/g,
    ];

    const replacements = [];

    for (const pattern of patterns) {
      const matches = content.matchAll(pattern);
      for (const match of matches) {
        const url = match[0];
        try {
          const localPath = await downloadImage(url);
          if (localPath) {
            replacements.push({ url, localPath });
          }
        } catch (error) {
          console.error(`Error downloading ${url}:`, error.message);
        }
      }
    }

    // Apply replacements
    for (const { url, localPath } of replacements) {
      newContent = newContent.replace(
        new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        localPath
      );
    }

    // Write back if changed
    if (newContent !== content) {
      fs.writeFileSync(filepath, newContent, "utf-8");
      console.log(`Updated: ${filepath}`);
      return replacements.length;
    }

    return 0;
  } catch (error) {
    console.error(`Error processing ${filepath}:`, error.message);
    return 0;
  }
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (/\.(jsx|js|tsx|ts)$/.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

async function main() {
  console.log("=".repeat(60));
  console.log("CDN Image Downloader and Localizer");
  console.log("=".repeat(60));

  const files = getAllFiles(SRC_DIR);
  let totalReplacements = 0;
  let processedFiles = 0;

  for (const file of files) {
    const replacements = await processFile(file);
    if (replacements > 0) {
      totalReplacements += replacements;
      processedFiles++;
    }
  }

  console.log("=".repeat(60));
  console.log("Summary:");
  console.log(`  Files processed: ${processedFiles}`);
  console.log(`  Total images downloaded: ${downloadedImages.size}`);
  console.log(`  Total URL replacements: ${totalReplacements}`);
  console.log(`  Images saved to: ${CDN_IMAGES_DIR}`);
  console.log("=".repeat(60));

  if (downloadedImages.size > 0) {
    console.log("\nDownloaded Images:");
    downloadedImages.forEach((localPath, url) => {
      console.log(`  ${url}`);
      console.log(`    -> ${localPath}`);
    });
  }
}

main().catch(console.error);
