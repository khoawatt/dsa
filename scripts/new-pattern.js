const fs = require("fs");
const path = require("path");
const { PATTERNS_DIR } = require("./lib");

function main() {
  const name = process.argv[2];
  if (!name) {
    console.log("Usage: npm run new-pattern -- <pattern-name>");
    console.log("Example: npm run new-pattern -- monotonic-stack");
    process.exit(1);
  }

  const dir = path.join(PATTERNS_DIR, name);
  if (fs.existsSync(dir)) {
    console.error(`Đã tồn tại: ${dir}`);
    process.exit(1);
  }
  fs.mkdirSync(dir, { recursive: true });

  const title = name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const readme = `# ${title}

## When should I think about this pattern?

- điều kiện A
- điều kiện B

## Recognition clues

Cụm từ thường gặp:

- "..."

## Core idea

Mô tả 2-3 câu ý tưởng chính.

## Invariant

> Tính chất mà trạng thái phải luôn duy trì trong suốt vòng lặp.

## Complexity

- Time: O(?)
- Space: O(?)

## Variants

1. Biến thể 1
2. Biến thể 2

## Representative problems

- (link tới \`04-problems/...\`)

## Common confusions

- Pattern nào dễ nhầm, khác nhau ở đâu.
`;

  const problems = `# ${title} — Problem Ladder

## Level 1

- [ ] problem

## Level 2

- [ ] problem

## Level 3

- [ ] problem
`;

  fs.writeFileSync(path.join(dir, "README.md"), readme);
  fs.writeFileSync(path.join(dir, "problems.md"), problems);

  console.log(`Created: ${path.relative(PATTERNS_DIR, dir)}`);
  console.log("Nhớ: thêm template tương ứng vào 03-templates/ và cập nhật PROGRESS.md.");
}

main();
