function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (seen.has(ch) && seen.get(ch) >= left) {
      left = seen.get(ch) + 1;
    }
    seen.set(ch, right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

module.exports = { lengthOfLongestSubstring };
