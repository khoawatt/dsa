/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    const str = strs[0];

    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (
                i >= strs[j].length ||
                str[i] !== strs[j][i]
            ) {
                return str.substring(0, i);
            }
        }
    }

    return str;
};

module.exports = { longestCommonPrefix };
