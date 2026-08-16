// Two Pointers — opposite direction
// Invariant: elements outside [left, right] are already processed.
// Time O(n), Space O(1)

// Two Sum II (sorted): 1-based indices of a pair summing to target, else [-1, -1].
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}

// Palindrome check using two pointers.
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = { twoSumSorted, isPalindrome };

if (require.main === module) {
  console.assert(JSON.stringify(twoSumSorted([2, 7, 11, 15], 9)) === "[1,2]", "twoSumSorted");
  console.assert(isPalindrome("racecar"), "isPalindrome true");
  console.assert(!isPalindrome("hello"), "isPalindrome false");
  console.log("two-pointers: ok");
}
