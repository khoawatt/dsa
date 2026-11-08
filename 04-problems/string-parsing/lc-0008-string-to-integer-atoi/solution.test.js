const { test } = require("node:test");
const assert = require("node:assert/strict");
const { myAtoi } = require("./solution");

const cases = [
  ["positive integer", "42", 42],
  ["leading spaces and negative sign", "   -42", -42],
  ["stop at first non-digit", "4193 with words", 4193],
  ["no digits at the beginning", "words and 987", 0],
  ["positive overflow clamps to MAX", "91283472332", 2147483647],
  ["negative overflow clamps to MIN", "-91283472332", -2147483648],
  ["plus sign", "+42", 42],
  ["two signs are invalid", "+-12", 0],
  ["leading zeros", "00000123", 123],
  ["zero followed by words", "   +0 123", 0],
  ["empty string", "", 0],
  ["exact MAX boundary", "2147483647", 2147483647],
  ["one above MAX", "2147483648", 2147483647],
  ["exact MIN boundary", "-2147483648", -2147483648],
  ["one below MIN", "-2147483649", -2147483648],
];

for (const [name, input, expected] of cases) {
  test(name, () => {
    assert.equal(myAtoi(input), expected);
  });
}
