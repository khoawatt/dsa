const { test } = require("node:test");
const assert = require("node:assert");
const { findMin } = require("./solution");

test("rotated", () => {
  assert.strictEqual(findMin([3, 4, 5, 1, 2]), 1);
});

test("not rotated", () => {
  assert.strictEqual(findMin([0, 1, 2, 3, 4]), 0);
});

test("two elements", () => {
  assert.strictEqual(findMin([2, 1]), 1);
});
