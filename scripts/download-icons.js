import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, "..", "public", "assets", "icons");
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// List of all unique icons to download
const icons = [
  // Contact page icons
  {
    url: "https://img.icons8.com/3d-fluency/200/customer-support.png",
    name: "customer-support.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/200/communication.png",
    name: "communication.png",
  },
  { url: "https://img.icons8.com/3d-fluency/94/phone.png", name: "phone.png" },
  { url: "https://img.icons8.com/3d-fluency/94/email.png", name: "email.png" },
  {
    url: "https://img.icons8.com/3d-fluency/94/location.png",
    name: "location.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/user-male-circle.png",
    name: "user-male-circle.png",
  },
  { url: "https://img.icons8.com/3d-fluency/94/chat.png", name: "chat.png" },
  {
    url: "https://img.icons8.com/3d-fluency/94/paper-plane.png",
    name: "paper-plane.png",
  },

  // Social media icons
  {
    url: "https://img.icons8.com/3d-fluency/94/facebook.png",
    name: "facebook.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/twitter.png",
    name: "twitter.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/instagram-new.png",
    name: "instagram.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/linkedin.png",
    name: "linkedin.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/whatsapp.png",
    name: "whatsapp.png",
  },

  // Other icons
  {
    url: "https://img.icons8.com/3d-fluency/94/checkmark.png",
    name: "checkmark.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/forward.png",
    name: "forward.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/calendar.png",
    name: "calendar.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/image-gallery.png",
    name: "image-gallery.png",
  },
  {
    url: "https://img.icons8.com/3d-fluency/94/delete-sign.png",
    name: "delete-sign.png",
  },
  { url: "https://img.icons8.com/3d-fluency/94/back.png", name: "back.png" },
  { url: "https://img.icons8.com/3d-fluency/94/clock.png", name: "clock.png" },

  // Festival icons (from ContactModal)
  {
    url: "https://img.icons8.com/color/96/party-popper.png",
    name: "party-popper.png",
  },
  { url: "https://img.icons8.com/color/96/holi.png", name: "holi.png" },
  { url: "https://img.icons8.com/color/96/ganesh.png", name: "ganesh.png" },
  {
    url: "https://img.icons8.com/color/96/flower-bouquet.png",
    name: "flower-bouquet.png",
  },
  {
    url: "https://img.icons8.com/color/96/bow-and-arrow.png",
    name: "bow-and-arrow.png",
  },
  { url: "https://img.icons8.com/color/96/diya.png", name: "diya.png" },
];

// Function to download a file
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(iconsDir, filename);

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${filename} already exists, skipping...`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`✓ Downloaded: ${filename}`);
            resolve();
          });
        } else {
          fs.unlink(filePath, () => {});
          reject(
            new Error(`Failed to download ${filename}: ${response.statusCode}`)
          );
        }
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
  });
}

// Download all icons
async function downloadAllIcons() {
  console.log("Starting icon downloads...\n");

  for (const icon of icons) {
    try {
      await downloadFile(icon.url, icon.name);
    } catch (error) {
      console.error(`✗ Error downloading ${icon.name}:`, error.message);
    }
  }

  console.log("\n✓ All icons downloaded successfully!");
}

downloadAllIcons();
