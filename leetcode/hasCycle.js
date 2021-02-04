/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     const map = new Map()
//     let i = 0
//     while (head) {
//         if (map.has(head)) return true
//         map.set(head, i)
//         head = head.next
//         i++
//     }

//     return false
// };
var hasCycle = function (head) {
    if (!head.next || !head.next.next) return false
    let slow = head.next,
        fast = slow.next
    while (slow && fast) {
        if (slow === fast) return true
        slow = slow.next
        if (!slow) return false
        fast = fast.next
        if (!fast) {
            return false
        }
        fast = fast.next
    }

    return false
};