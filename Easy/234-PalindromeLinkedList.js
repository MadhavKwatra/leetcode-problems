/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//     if (!head)
//         return false;

//     let stack = [];
//     let curr = head;
//     while (curr) {
//         stack.push(curr.val);
//         curr = curr.next
//     }
//     let normalString = stack.toString();
//     let reversedStack = [];
//     while (stack.length) {
//         reversedStack.push(stack.pop());
//     }

//     return normalString === reversedStack.toString()
// };

// Time O(N+N) Space

// AFter going through discussion

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  let prev, temp;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // slow is at mid;
  prev = slow;
  slow = slow.next;
  prev.next = null;

  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  fast = head;
  slow = prev;
  while (slow) {
    if (slow.val !== fast.val) return false;
    else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return true;
};
