/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0,
        end = nums.length - 1,
        startVal = nums[start],
        endVal = nums[end]
    if (startVal >= target) {
        return start
    }
    if (endVal < target) {
        return end + 1
    }

    while (start <= end) {
        startVal = nums[start]
        endVal = nums[end]
        if (startVal >= target) {
            return start
        }
        if (endVal <= target) {
            return endVal === target ? end : end + 1
        }
        start++
        end--
    }

    return start
};