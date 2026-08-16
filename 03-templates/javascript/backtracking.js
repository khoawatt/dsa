// Backtracking
// Template: choose → explore → unchoose.
// Time O(branch^depth), Space O(depth)

// Generate all subsets of nums.
function subsets(nums) {
  const result = [];
  const path = [];

  const backtrack = (start) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);      // choose
      backtrack(i + 1);        // explore
      path.pop();              // unchoose
    }
  };

  backtrack(0);
  return result;
}

// Generate all permutations of nums.
function permute(nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);
  const path = [];

  const backtrack = () => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack();
      path.pop();
      used[i] = false;
    }
  };

  backtrack();
  return result;
}

module.exports = { subsets, permute };

if (require.main === module) {
  console.assert(subsets([1, 2]).length === 4, "subsets");
  console.assert(permute([1, 2, 3]).length === 6, "permute");
  console.log("backtracking: ok");
}
