/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const ret = {}
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (curr in ret) {
            return [ret[curr], i]
        }
        ret[target - curr] = i
    }
};