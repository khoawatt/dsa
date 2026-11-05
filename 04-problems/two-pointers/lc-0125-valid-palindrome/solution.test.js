const { test } = require("node:test");
const assert = require("node:assert");
const { isPalindrome } = require("./solution");

test("valid palindrome with punctuation and spaces", () => {
  assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
});

test("not a palindrome", () => {
  assert.strictEqual(isPalindrome("race a car"), false);
});

test("only spaces becomes an empty string", () => {
  assert.strictEqual(isPalindrome(" "), true);
});

test("digits are included", () => {
  assert.strictEqual(isPalindrome("0P"), false);
});

test("single alphanumeric character", () => {
  assert.strictEqual(isPalindrome("a"), true);
});
