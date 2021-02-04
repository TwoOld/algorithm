/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let newHead = null
    if (l1.val < l2.val) {
        newHead = l1
        l1 = l1.next
    } else {
        newHead = l2
        l2 = l2.next
    }
    let curr = newHead
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    let left = l1 || l2
    while (left) {
        curr.next = left
        left = left.next
        curr = curr.next
    }

    return newHead
};