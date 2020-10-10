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
var detectCycle = function (head) {
  if (!head || !head.next || !head.next.next) {
    return null;
  }
  if (head.next == head || head.next.next == head) {
    return head;
  }
  var p1 = head;
  var p2 = head;
  while (true) {
    if (!p1.next || !p2.next || !p2.next.next) {
      return null;
    }
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 == p2) {
      p2 = head;
      while (true) {
        p2 = p2.next;
        p1 = p1.next;
        if (p1 == p2) {
          return p1;
        }
      }
    }
  }
};
