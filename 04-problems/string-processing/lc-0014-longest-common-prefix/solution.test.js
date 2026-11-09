const { test } = require("node:test");
const assert = require("node:assert/strict");
const { longestCommonPrefix } = require("./solution");

const cases = [
  ["standard example", ["flower", "flow", "flight"], "fl"],
  ["no common prefix", ["dog", "racecar", "car"], ""],
  ["single string", ["alone"], "alone"],
  ["empty array", [], ""],
  ["first string is empty", ["", "b"], ""],
  ["another string is empty", ["abc", ""], ""],
  ["all strings are identical", ["test", "test", "test"], "test"],
  ["first string is shortest", ["ab", "abc"], "ab"],
  ["mismatch after several matching characters", ["interview", "internet", "internal"], "inter"],
];

for (const [name, input, expected] of cases) {
  test(name, () => {
    assert.equal(longestCommonPrefix(input), expected);
  });
}
