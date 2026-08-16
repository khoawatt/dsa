const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib");

function parseArgs(argv) {
  const args = { slug: null, pattern: null, langs: ["js"] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--pattern") args.pattern = argv[++i];
    else if (a === "--lang" || a === "--langs") {
      args.langs = (argv[++i] || "js").split(",").map((s) => s.trim());
    } else if (!args.slug && !a.startsWith("--")) {
      args.slug = a;
    }
  }
  return args;
}

function titleFromSlug(slug) {
  return slug
    .replace(/^(lc-\d+)-/, "") // strip lc-0001- prefix
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function sourceFromSlug(slug) {
  const m = slug.match(/^lc-(\d+)/);
  return m ? `lc-${parseInt(m[1], 10)}` : slug;
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.slug || !args.pattern) {
    console.log("Usage: npm run new-problem -- <slug> --pattern <pattern> --lang js,py");
    console.log('Example: npm run new-problem -- lc-0001-two-sum --pattern two-pointers --lang js,py');
    process.exit(1);
  }

  const dir = path.join(ROOT, "04-problems", args.pattern, args.slug);
  if (fs.existsSync(dir)) {
    console.error(`Đã tồn tại: ${dir}`);
    process.exit(1);
  }
  fs.mkdirSync(dir, { recursive: true });

  const today = new Date().toISOString().slice(0, 10);
  const title = titleFromSlug(args.slug);
  const source = sourceFromSlug(args.slug);
  const langsYaml = `[${args.langs.join(", ")}]`;
  const tagsYaml = "[array]";

  const readme = `---
title: ${title}
source: ${source}
difficulty: easy
pattern: ${args.pattern}
tags: ${tagsYaml}
languages: ${langsYaml}
time: O(?)
space: O(?)
mastery: 0
next_review: ${today}
done_at: ${today}
---

# ${title}

Source: LeetCode | Difficulty:

## Data Structure

## Pattern

## Recognition

## Key Insight

## Invariant

## Complexity

- Time:
- Space:

## Mistakes I Made

## Related Problems
`;

  fs.writeFileSync(path.join(dir, "README.md"), readme);

  fs.writeFileSync(
    path.join(dir, "solution.js"),
    "function solve(input) {\n  return input;\n}\n\nmodule.exports = { solve };\n"
  );

  fs.writeFileSync(
    path.join(dir, "solution.test.js"),
    `const { test } = require("node:test");\nconst assert = require("node:assert");\nconst { solve } = require("./solution");\n\ntest("basic", () => {\n  assert.strictEqual(solve(1), 1);\n});\n`
  );

  if (args.langs.includes("py")) {
    fs.writeFileSync(
      path.join(dir, "solution.py"),
      "def solve(input):\n    return input\n\n\nif __name__ == \"__main__\":\n    assert solve(1) == 1\n    print(\"ok\")\n"
    );
    fs.writeFileSync(
      path.join(dir, "solution_test.py"),
      "from solution import solve\n\n\ndef test_basic():\n    assert solve(1) == 1\n"
    );
  }

  console.log(`Created: ${path.relative(ROOT, dir)}`);
  console.log("Nhớ: sửa front matter, viết lời giải, rồi chạy `npm run index`.");
}

main();
