/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//     if (head === null || head.next === null) return head

//     let curr = head,
//         prev = null

//     while (curr) {
//         const temp = curr.next
//         curr.next = prev
//         prev = curr
//         curr = temp
//     }

//     return prev
// };
var reverseList = function (head) {
    if (head === null || head.next === null) return head;
    const newHead = reverseList(head.next)
    head.next.next = newHead
    head.next = null

    return head
};