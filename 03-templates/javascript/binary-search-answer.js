// Binary Search on Answer
// Search the answer space [lo, hi]; check(mid) is monotonic.
// Time O(log(range) * checkCost), Space O(1)

// Minimize the maximum: smallest value x such that check(x) is true.
// Example: minimum capacity to ship packages within `days` days.
function minCapacity(weights, days) {
  const canShip = (cap) => {
    let d = 1;
    let cur = 0;
    for (const w of weights) {
      if (cur + w > cap) {
        d++;
        cur = 0;
      }
      cur += w;
    }
    return d <= days;
  };

  let lo = Math.max(...weights);
  let hi = weights.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canShip(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}

module.exports = { minCapacity };

if (require.main === module) {
  console.assert(minCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) === 15, "minCapacity");
  console.log("binary-search-answer: ok");
}
