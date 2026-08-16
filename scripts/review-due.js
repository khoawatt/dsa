const { readProblems } = require("./lib");

const today = new Date();
today.setHours(0, 0, 0, 0);

function isDue(nextReview) {
  if (!nextReview || typeof nextReview !== "string") return false;
  const d = new Date(nextReview + "T00:00:00");
  return !Number.isNaN(d.getTime()) && d <= today;
}

function main() {
  const due = readProblems().filter((p) => isDue(p.meta.next_review));

  if (due.length === 0) {
    console.log("Không có bài nào tới hạn ôn tập.");
    return;
  }

  console.log(`Có ${due.length} bài tới hạn ôn tập:\n`);
  for (const p of due) {
    const title = p.meta.title ?? p.problem;
    console.log(`- ${title} (${p.problem}) — next_review: ${p.meta.next_review}`);
  }
}

main();
