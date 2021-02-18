/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memo = {}

    const help = function (i, n, memo) {
        if (i > n) return 0
        if (i === n) return 1
        if (memo[i] > 0) return memo[i]
        memo[i] = help(i + 1, n, memo) + help(i + 2, n, memo)
        return memo[i]
    }

    return help(0, n, memo)
};