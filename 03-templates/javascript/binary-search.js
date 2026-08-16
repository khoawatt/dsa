// Binary Search — exact + lower bound
// Invariant: target is inside [left, right]; while (left <= right); discard half each step.
// Time O(log n), Space O(1)

// Exact target: return index, else -1.
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Lower bound: first index where nums[i] >= target (insertion position).
function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}

module.exports = { binarySearch, lowerBound };

if (require.main === module) {
  console.assert(binarySearch([1, 3, 5, 6], 5) === 2, "binarySearch hit");
  console.assert(binarySearch([1, 3, 5, 6], 2) === -1, "binarySearch miss");
  console.assert(lowerBound([1, 3, 5, 6], 2) === 1, "lowerBound");
  console.log("binary-search: ok");
}
