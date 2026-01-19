// Script to fix loading="lazy" formatting in all files
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToFix = [
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

function fixFile(filePath) {
  const fullPath = path.join(__dirname, "..", filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, "utf8");

  // Fix malformed loading="lazy" attributes
  // Pattern 1: Fix />\n loading="lazy"> to loading="lazy" />
  content = content.replace(
    /\/\>\s*\n\s*loading="lazy">/g,
    ' loading="lazy" />'
  );

  // Pattern 2: Fix style={...} /\n loading="lazy"> to style={...} loading="lazy" />
  content = content.replace(
    /\}\s*\/\s*\n\s*loading="lazy">/g,
    '} loading="lazy" />'
  );

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`✓ Fixed: ${filePath}`);
}

console.log('Fixing loading="lazy" formatting...\n');

filesToFix.forEach(fixFile);

console.log("\n✓ All files fixed!");
