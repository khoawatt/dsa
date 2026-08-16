const { test } = require("node:test");
const assert = require("node:assert");
const { maxArea } = require("./solution");

test("basic", () => {
  assert.strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
});

test("two bars", () => {
  assert.strictEqual(maxArea([1, 1]), 1);
});
