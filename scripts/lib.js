const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PROBLEMS_DIR = path.join(ROOT, "04-problems");
const PATTERNS_DIR = path.join(ROOT, "02-patterns");
const TEMPLATES_DIR = path.join(ROOT, "03-templates");

// Parse simple YAML front matter: scalar values and [a, b] lists.
function parseFrontMatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const meta = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }
    meta[key] = value;
  }
  return meta;
}

// Walk 04-problems/<pattern>/<problem>/README.md and return records.
function readProblems() {
  const records = [];
  for (const pattern of fs.readdirSync(PROBLEMS_DIR)) {
    const patternDir = path.join(PROBLEMS_DIR, pattern);
    if (!fs.statSync(patternDir).isDirectory()) continue;
    for (const problem of fs.readdirSync(patternDir)) {
      const readmePath = path.join(patternDir, problem, "README.md");
      if (!fs.existsSync(readmePath)) continue;
      const content = fs.readFileSync(readmePath, "utf8");
      const meta = parseFrontMatter(content);
      records.push({ pattern, problem, meta, readmePath });
    }
  }
  return records;
}

module.exports = {
  ROOT,
  PROBLEMS_DIR,
  PATTERNS_DIR,
  TEMPLATES_DIR,
  parseFrontMatter,
  readProblems,
};
