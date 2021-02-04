/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || !prices.length) return 0

    let min = Number.MAX_SAFE_INTEGER,
        max = 0

    for (let i = 0, price; i < prices.length; i++) {
        price = prices[i]
        min = Math.min(min, price)
        max = Math.max(max, price - min)
    }

    return max
};