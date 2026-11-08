/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0;
    let num = 0;
    let sign = 1;

    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    // STEP 1: Skip leading spaces
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // STEP 2: Determine sign
    if (i < s.length && (s[i] === "-" || s[i] === "+")) {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    // STEP 3: Prepare overflow checking
    const limit = sign > 0 ? MAX : -MIN;
    const threshold = Math.floor(limit / 10);
    const lastDigit = limit % 10;

    // STEP 4: Read consecutive digits
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        const digit = Number(s[i]);

        // Check overflow BEFORE updating num
        if (num > threshold || (num === threshold && digit > lastDigit)) {
            return sign > 0 ? MAX : MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    // STEP 5: Return result
    return sign * num;
};

module.exports = { myAtoi };
