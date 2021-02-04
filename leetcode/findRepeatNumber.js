/**
 * @param {number[]} nums
 * @return {number}
 */
function findRepeatNumber(nums) {
    const cache = []
    for (const num of nums) {
        if (cache.includes(num)) {
            return num
        }
        cache.push(num)
    }
}
// function findRepeatNumber(nums) {
//     let i = 0,
//         j = nums.length
//     const map = {}
//     while (j > i) {
//         const head = nums[i]
//         const tail = nums[j]
//         if (head === tail) {
//             return head
//         }
//         if (map[head]===1) {
//             return head
//         }
//         if (map[tail]===1) {
//             return tail
//         }
//         map[head] = 1
//         map[tail] = 1
//         i++
//         j--
//     }
// }

console.log(findRepeatNumber([0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));