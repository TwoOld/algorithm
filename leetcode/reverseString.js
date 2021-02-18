/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const helper = function (start, end, str) {
        if (start >= end) return

        const temp = str[start]
        str[start] = str[end]
        str[end] = temp

        helper(start + 1, end - 1, str)
    }

    helper(0, s.length - 1, s)
};