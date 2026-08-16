// Prefix Sum
// prefix[i] = sum(nums[0..i-1]); range sum [l, r] = prefix[r+1] - prefix[l].
// Time O(n) build, O(1) query, Space O(n)

function buildPrefix(nums) {
  const prefix = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  return prefix;
}

// Sum of nums[l..r] inclusive.
function rangeSum(prefix, l, r) {
  return prefix[r + 1] - prefix[l];
}

module.exports = { buildPrefix, rangeSum };

if (require.main === module) {
  const p = buildPrefix([1, 2, 3, 4]);
  console.assert(rangeSum(p, 1, 2) === 5, "rangeSum");
  console.log("prefix-sum: ok");
}
