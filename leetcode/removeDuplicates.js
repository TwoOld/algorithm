/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0,
        j = 1
    while (j < nums.length) {
        const slow = nums[i]
        const fast = nums[j]
        if (slow === fast) {
            j++
        } else {
            nums[i + 1] = fast
            i++
            j++
        }
    }
    return i + 1
};