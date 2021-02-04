/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length === 1) {
        return nums[0] === val ? 0 : 1
    }
    let start = 0,
        end = nums.length - 1
    while (start <= end) {
        const startVal = nums[start]
        const endVal = nums[end]
        if (endVal === val) {
            end--
        } else if (startVal === val) {
            nums[start] = endVal
            start++
            end--
        } else {
            start++
        }
    }

    return start
};