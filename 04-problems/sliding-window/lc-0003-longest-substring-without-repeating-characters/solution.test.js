const { test } = require("node:test");
const assert = require("node:assert");
const { lengthOfLongestSubstring } = require("./solution");

test("abcabcbb", () => {
  assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
});

test("all same", () => {
  assert.strictEqual(lengthOfLongestSubstring("bbbbb"), 1);
});

test("single char", () => {
  assert.strictEqual(lengthOfLongestSubstring(" "), 1);
});

test("pwwkew", () => {
  assert.strictEqual(lengthOfLongestSubstring("pwwkew"), 3);
});
