/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length;
    let cnt = 0;

    // STEP 1: Skip trailing spaces
    while (i > 0 && s[i - 1] === " ") {
        i--;
    }

    // STEP 2: Count characters in the last word
    while (i > 0 && s[i - 1] !== " ") {
        cnt++;
        i--;
    }

    return cnt;
};

module.exports = { lengthOfLastWord };
