const { test } = require("node:test");
const assert = require("node:assert");
const { search } = require("./solution");

test("hit", () => {
  assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
});

test("miss", () => {
  assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 2), -1);
});

test("single", () => {
  assert.strictEqual(search([5], 5), 0);
});
