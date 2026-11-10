/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length;
  let rs = "";
  let cnt = 0;

  while (i > 0) {
      if (s[i - 1] === " ") i--;

      if (/^[A-Za-z]+$/.test(s[i - 1])) {
          while (i > 0 && s[i - 1] !== " ") {
              cnt++;
              i--;
          }
          return cnt;
      }
  }
};

module.exports = { lengthOfLastWord };
