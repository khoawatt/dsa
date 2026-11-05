var isPalindromeRegex = function(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split('').reverse().join('');
};

var isPalindromeTwoPointers = function(s) {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNumeric = (char) => {
        return /[a-z0-9]/i.test(char);
    };

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

module.exports = {
    isPalindromeRegex,
    isPalindromeTwoPointers,
};
