// Script to update all CDN icon URLs to local paths across the project
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of CDN URLs to local paths
const iconMappings = {
  "https://img.icons8.com/3d-fluency/200/customer-support.png":
    "/assets/icons/customer-support.png",
  "https://img.icons8.com/3d-fluency/200/communication.png":
    "/assets/icons/communication.png",
  "https://img.icons8.com/3d-fluency/94/phone.png": "/assets/icons/phone.png",
  "https://img.icons8.com/3d-fluency/94/email.png": "/assets/icons/email.png",
  "https://img.icons8.com/3d-fluency/94/location.png":
    "/assets/icons/location.png",
  "https://img.icons8.com/3d-fluency/94/user-male-circle.png":
    "/assets/icons/user-male-circle.png",
  "https://img.icons8.com/3d-fluency/94/chat.png": "/assets/icons/chat.png",
  "https://img.icons8.com/3d-fluency/94/paper-plane.png":
    "/assets/icons/paper-plane.png",
  "https://img.icons8.com/3d-fluency/94/facebook.png":
    "/assets/icons/facebook.png",
  "https://img.icons8.com/3d-fluency/94/twitter.png":
    "/assets/icons/twitter.png",
  "https://img.icons8.com/3d-fluency/94/instagram-new.png":
    "/assets/icons/instagram.png",
  "https://img.icons8.com/3d-fluency/94/linkedin.png":
    "/assets/icons/linkedin.png",
  "https://img.icons8.com/3d-fluency/94/whatsapp.png":
    "/assets/icons/whatsapp.png",
  "https://img.icons8.com/3d-fluency/94/checkmark.png":
    "/assets/icons/checkmark.png",
  "https://img.icons8.com/3d-fluency/94/forward.png":
    "/assets/icons/forward.png",
  "https://img.icons8.com/3d-fluency/94/calendar.png":
    "/assets/icons/calendar.png",
  "https://img.icons8.com/3d-fluency/94/image-gallery.png":
    "/assets/icons/image-gallery.png",
  "https://img.icons8.com/3d-fluency/94/delete-sign.png":
    "/assets/icons/delete-sign.png",
  "https://img.icons8.com/3d-fluency/94/back.png": "/assets/icons/back.png",
  "https://img.icons8.com/3d-fluency/94/clock.png": "/assets/icons/clock.png",
  "https://img.icons8.com/color/96/party-popper.png":
    "/assets/icons/party-popper.png",
  "https://img.icons8.com/color/96/holi.png": "/assets/icons/holi.png",
  "https://img.icons8.com/color/96/ganesh.png": "/assets/icons/ganesh.png",
  "https://img.icons8.com/color/96/flower-bouquet.png":
    "/assets/icons/flower-bouquet.png",
  "https://img.icons8.com/color/96/bow-and-arrow.png":
    "/assets/icons/bow-and-arrow.png",
  "https://img.icons8.com/color/96/diya.png": "/assets/icons/diya.png",
};

// Files to update (already updated Contact.jsx and Footer.jsx manually)
const filesToUpdate = [
  "src/components/ContactModal.jsx",
  "src/pages/Home/HomeContactUs.jsx",
  "src/pages/portfolio/Portfolio.jsx",
  "src/pages/portfolio/ProjectDetail.jsx",
  "src/pages/services/ServiceDetails.jsx",
  "src/pages/ourteam/OurTeam.jsx",
  "src/pages/blogs/Blogs.jsx",
  "src/pages/blogs/BlogDetails.jsx",
  "src/pages/about/About.jsx",
];

function updateFile(filePath) {
  const fullPath = path.join(__dirname, "..", filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, "utf8");
  let updated = false;

  // Replace all CDN URLs with local paths
  for (const [cdn, local] of Object.entries(iconMappings)) {
    if (content.includes(cdn)) {
      content = content.replace(
        new RegExp(cdn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        local
      );
      updated = true;
    }
  }

  // Add loading="lazy" to img tags that don't have it
  // Match img tags with src containing /assets/icons/ that don't have loading attribute
  const imgRegex = /(<img[^>]*src=["']\/assets\/icons\/[^"']+["'][^>]*)(\/?>)/g;
  content = content.replace(imgRegex, (match, imgTag, closing) => {
    if (!imgTag.includes("loading=")) {
      // Insert loading="lazy" before the closing
      return `${imgTag}\n                      loading="lazy"${closing}`;
    }
    return match;
  });

  if (updated) {
    fs.writeFileSync(fullPath, content, "utf8");
    console.log(`✓ Updated: ${filePath}`);
  } else {
    console.log(`○ No changes needed: ${filePath}`);
  }
}

console.log("Starting to update files with local icon paths...\n");

filesToUpdate.forEach(updateFile);

console.log("\n✓ All files processed!");
console.log("\nSummary:");
console.log("- All CDN icon URLs have been replaced with local paths");
console.log("- Icons are stored in: public/assets/icons/");
console.log('- All img tags now have loading="lazy" for better performance');
