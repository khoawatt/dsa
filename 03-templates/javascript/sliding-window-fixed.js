// Sliding Window — fixed size
// Invariant: window [left, right] has exactly size k.
// Time O(n), Space O(1)

// Maximum sum of any contiguous subarray of length k.
function maxSumFixedWindow(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let max = sum;
  for (let right = k; right < nums.length; right++) {
    sum += nums[right] - nums[right - k];
    if (sum > max) max = sum;
  }
  return max;
}

module.exports = { maxSumFixedWindow };

if (require.main === module) {
  console.assert(maxSumFixedWindow([1, 2, 3, 4, 5], 2) === 9, "maxSumFixedWindow");
  console.log("sliding-window-fixed: ok");
}
