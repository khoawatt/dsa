const { test } = require("node:test");
const assert = require("node:assert/strict");
const {
  isPalindromeRegex,
  isPalindromeTwoPointers,
} = require("./solution");

const cases = [
  ["letters, spaces and punctuation", "A man, a plan, a canal: Panama", true],
  ["not a palindrome", "race a car", false],
  ["digits are included", "0P", false],
  ["empty after filtering", " ", true],
  ["single alphanumeric character", "a", true],
  ["punctuation around one character", ".,a.", true],
  ["mixed case and digits", "1a2A1", true],
];

for (const [name, input, expected] of cases) {
  test(`RegExp + Reverse: ${name}`, () => {
    assert.equal(isPalindromeRegex(input), expected);
  });

  test(`Two Pointers: ${name}`, () => {
    assert.equal(isPalindromeTwoPointers(input), expected);
  });
}
