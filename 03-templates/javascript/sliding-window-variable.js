// Sliding Window — variable size
// Invariant: window [left, right] always satisfies the condition; shrink left when invalid.
// Time O(n), Space O(k) (state size)

// Longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (seen.has(ch) && seen.get(ch) >= left) {
      left = seen.get(ch) + 1; // shrink past the previous occurrence
    }
    seen.set(ch, right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

// Longest subarray with sum <= target (window + state condition).
function longestSubarrayAtMostSum(nums, target) {
  let left = 0;
  let sum = 0;
  let max = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > target) {
      sum -= nums[left];
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

module.exports = { lengthOfLongestSubstring, longestSubarrayAtMostSum };

if (require.main === module) {
  console.assert(lengthOfLongestSubstring("abcabcbb") === 3, "lengthOfLongestSubstring");
  console.assert(longestSubarrayAtMostSum([1, 2, 1, 0, 1], 3) === 3, "longestSubarrayAtMostSum");
  console.log("sliding-window-variable: ok");
}
