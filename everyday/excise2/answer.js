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
var addTwoNumbers = function (l1, l2) {
    let prevLeft = 0;
    let result;
    let temp1 = l1;
    let temp2 = l2;
    let tempNext;
    while (temp1 || temp2) {
        const sum = (temp1 ? temp1.val : 0) + (temp2 ? temp2.val : 0) + prevLeft;
        prevLeft = Math.floor(sum / 10);
        const realValue = sum % 10;
        if (!tempNext) {
            result = new ListNode(realValue);
            tempNext = result;
        } else {
            const temp = new ListNode(realValue);
            tempNext.next = temp;
            tempNext = temp;
        }
        if (temp1) {
            temp1 = temp1.next
        }
        if (temp2) {
            temp2 = temp2.next
        }

    }

    return result;
};