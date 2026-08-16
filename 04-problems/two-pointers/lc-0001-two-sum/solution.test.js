const { test } = require("node:test");
const assert = require("node:assert");
const { twoSum } = require("./solution");

test("two sum basic", () => {
  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

test("two sum unordered", () => {
  assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
});

test("two sum same element", () => {
  assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
});
