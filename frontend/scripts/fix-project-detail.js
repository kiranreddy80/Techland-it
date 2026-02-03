// Fix the malformed img tag in ProjectDetail.jsx
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(
  __dirname,
  "..",
  "src",
  "pages",
  "portfolio",
  "ProjectDetail.jsx"
);

let content = fs.readFileSync(filePath, "utf8");

// Fix the malformed img tag
// Pattern: /\n loading="lazy"> should be loading="lazy" />
content = content.replace(/\/\s*\n\s*loading="lazy">/g, ' loading="lazy" />');

// Also fix any other similar patterns
content = content.replace(
  /\}\s*\/\s*\n\s*loading="lazy">/g,
  '} loading="lazy" />'
);

fs.writeFileSync(filePath, content, "utf8");

console.log("✓ Fixed ProjectDetail.jsx");
