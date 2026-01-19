import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to scan for images
const imageDir = path.join(__dirname, "..", "public", "assets");
const srcDir = path.join(__dirname, "..", "src");

// Image extensions to look for
const imageExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".svg",
  ".webp",
  ".ico",
];

// Function to recursively get all files
function getAllFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      try {
        if (fs.statSync(filePath).isDirectory()) {
          getAllFiles(filePath, fileList);
        } else {
          fileList.push(filePath);
        }
      } catch (err) {
        // Skip files we can't access
      }
    });
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err.message);
  }

  return fileList;
}

// Get all image files
const allImageFiles = getAllFiles(imageDir).filter((file) =>
  imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
);

// Get all source files
const allSourceFiles = getAllFiles(srcDir).filter(
  (file) =>
    file.endsWith(".jsx") ||
    file.endsWith(".js") ||
    file.endsWith(".tsx") ||
    file.endsWith(".ts") ||
    file.endsWith(".css")
);

// Read all source content
let sourceContent = "";
allSourceFiles.forEach((file) => {
  try {
    sourceContent += fs.readFileSync(file, "utf8");
  } catch (err) {
    console.error(`Error reading ${file}:`, err.message);
  }
});

// Check which images are used
const unusedImages = [];
const usedImages = [];

allImageFiles.forEach((imagePath) => {
  const fileName = path.basename(imagePath);
  const fileNameWithoutExt = path.parse(fileName).name;
  const relativePath = path
    .relative(path.join(__dirname, "..", "public"), imagePath)
    .replace(/\\/g, "/");

  // Check if image is referenced in source code
  const isUsed =
    sourceContent.includes(fileName) ||
    sourceContent.includes(fileNameWithoutExt) ||
    sourceContent.includes(relativePath);

  if (isUsed) {
    usedImages.push(relativePath);
  } else {
    unusedImages.push(relativePath);
  }
});

// Output results
console.log("\n=== IMAGE USAGE ANALYSIS ===\n");
console.log(`Total images found: ${allImageFiles.length}`);
console.log(`Used images: ${usedImages.length}`);
console.log(`Unused images: ${unusedImages.length}\n`);

if (unusedImages.length > 0) {
  console.log("=== UNUSED IMAGES ===\n");
  unusedImages.forEach((img) => console.log(`  - ${img}`));

  // Save to file
  const reportPath = path.join(__dirname, "..", "unused-images-report.txt");
  fs.writeFileSync(reportPath, unusedImages.join("\n"));
  console.log(`\n✅ Report saved to: unused-images-report.txt`);

  // Create delete script
  const deleteScript = unusedImages
    .map((img) => {
      const fullPath = path.join(__dirname, "..", "public", img);
      return `Remove-Item -Path "${fullPath}" -Force`;
    })
    .join("\n");

  const deleteScriptPath = path.join(
    __dirname,
    "..",
    "delete-unused-images.ps1"
  );
  fs.writeFileSync(deleteScriptPath, deleteScript);
  console.log(`✅ Delete script saved to: delete-unused-images.ps1`);
}

console.log("\n=== USED IMAGES (Sample) ===\n");
usedImages.slice(0, 10).forEach((img) => console.log(`  - ${img}`));
if (usedImages.length > 10) {
  console.log(`  ... and ${usedImages.length - 10} more`);
}
