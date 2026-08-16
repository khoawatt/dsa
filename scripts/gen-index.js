const fs = require("fs");
const path = require("path");
const { ROOT, readProblems } = require("./lib");

function listTemplates() {
  const result = { javascript: [], python: [] };
  for (const lang of ["javascript", "python"]) {
    const dir = path.join(ROOT, "03-templates", lang);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (file.endsWith(".js") || file.endsWith(".py")) result[lang].push(file);
    }
    result[lang].sort();
  }
  return result;
}

function rel(fromRoot, abs) {
  return "./" + path.relative(ROOT, abs).split(path.sep).join("/");
}

function generate() {
  const problems = readProblems();
  const templates = listTemplates();

  const byPattern = new Map();
  for (const p of problems) {
    if (!byPattern.has(p.pattern)) byPattern.set(p.pattern, []);
    byPattern.get(p.pattern).push(p);
  }

  const lines = [];
  lines.push("# INDEX");
  lines.push("");
  lines.push("> Sinh tự động bởi `npm run index`. Đừng sửa bằng tay.");
  lines.push("");

  lines.push(`## Tổng quan`);
  lines.push("");
  lines.push(`- ${byPattern.size} pattern, ${problems.length} bài.`);
  lines.push("");

  lines.push("## By Pattern");
  lines.push("");
  for (const [pattern, probs] of [...byPattern.entries()].sort()) {
    lines.push(`### ${pattern}`);
    lines.push("");
    lines.push("| Bài | Source | Độ khó | Time/Space | Ngôn ngữ |");
    lines.push("|---|---|---|---|---|");
    for (const p of probs) {
      const title = p.meta.title ?? p.problem;
      const langs = (p.meta.languages ?? []).join(", ");
      const link = rel(ROOT, p.readmePath);
      lines.push(
        `| [${title}](${link}) | ${p.meta.source ?? "-"} | ${p.meta.difficulty ?? "-"} | ${p.meta.time ?? "-"} / ${p.meta.space ?? "-"} | ${langs} |`
      );
    }
    lines.push("");
  }

  lines.push("## Templates");
  lines.push("");
  for (const [lang, files] of Object.entries(templates)) {
    lines.push(`### ${lang}`);
    lines.push("");
    for (const f of files) {
      lines.push(`- [${f}](./03-templates/${lang}/${f})`);
    }
    lines.push("");
  }

  lines.push("<!-- INDEX_AUTO_GENERATED -->");
  lines.push("");

  return lines.join("\n");
}

const output = generate();
fs.writeFileSync(path.join(ROOT, "INDEX.md"), output);
console.log(`INDEX.md generated: ${readProblems().length} problems.`);
