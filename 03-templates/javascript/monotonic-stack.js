// Monotonic Stack — next greater element
// Invariant: stack holds indices with strictly decreasing values.
// Time O(n), Space O(n)

// For each index, the next greater element (index), or -1 if none.
function nextGreater(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = []; // indices, values strictly decreasing
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = i;
    }
    stack.push(i);
  }
  return result;
}

module.exports = { nextGreater };

if (require.main === module) {
  console.assert(JSON.stringify(nextGreater([2, 1, 2, 4, 3])) === "[3,2,3,-1,-1]", "nextGreater");
  console.log("monotonic-stack: ok");
}
