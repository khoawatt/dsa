const fs = require("fs");
const path = require("path");
const { ROOT, PATTERNS_DIR, readProblems } = require("./lib");

const REQUIRED_FIELDS = ["title", "source", "difficulty", "pattern", "time", "space"];

function main() {
  const errors = [];
  const warnings = [];
  const problems = readProblems();

  // 1. Validate problem front matter + files.
  for (const p of problems) {
    for (const field of REQUIRED_FIELDS) {
      if (!(field in p.meta)) {
        errors.push(`${p.problem}: thiếu field "${field}" trong front matter.`);
      }
    }

    const dir = path.dirname(p.readmePath);
    if (!fs.existsSync(path.join(dir, "solution.js"))) {
      errors.push(`${p.problem}: thiếu solution.js.`);
    }
  }

  // 2. Validate pattern link: every problem's pattern should have a folder in 02-patterns.
  const knownPatterns = new Set(
    fs.readdirSync(PATTERNS_DIR).filter((d) => !d.startsWith("_"))
  );
  for (const p of problems) {
    if (!knownPatterns.has(p.pattern)) {
      warnings.push(`${p.problem}: pattern "${p.pattern}" chưa có trong 02-patterns/.`);
    }
  }

  // 3. Validate problem folders without README front matter.
  const problemsRoot = path.join(ROOT, "04-problems");
  for (const pattern of fs.readdirSync(problemsRoot)) {
    const patternDir = path.join(problemsRoot, pattern);
    if (!fs.statSync(patternDir).isDirectory()) continue;
    for (const problem of fs.readdirSync(patternDir)) {
      const readmePath = path.join(patternDir, problem, "README.md");
      if (!fs.existsSync(readmePath)) {
        errors.push(`${pattern}/${problem}: thiếu README.md.`);
      }
    }
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log("Validate OK — không có lỗi.");
    return;
  }
  if (errors.length) {
    console.log("LỖI:");
    errors.forEach((e) => console.log("  - " + e));
  }
  if (warnings.length) {
    console.log("CẢNH BÁO:");
    warnings.forEach((w) => console.log("  - " + w));
  }
  process.exitCode = errors.length ? 1 : 0;
}

main();
