// 21. Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//     if (list2 == null) {
//         return list1;
//     }
//     if (list1 == null) {
//         return list2;
//     }
//     console.log(list1, list2);

//     if (list1.val <= list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2)
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next)
//         return list2;
//     }
// };

// Iterative
var mergeTwoLists = function (list1, list2) {
  if (list2 == null) {
    return list1;
  }
  if (list1 == null) {
    return list2;
  }
  // console.log(list1, list2);
  // Have a dummy pointer
  let pointer = new ListNode(-1);
  // OR
  // Choosing the smaller one to start the new list
  // let pointer = list1;
  // if(list1.val>list2.val){
  //     pointer = list2;
  //     list2= list2.next;
  // }else{
  //     list1=list1.next;
  // }
  let current = pointer;

  // Watched neetcode's explanation , it was similar to this solution so understood completely. Was not before. I am dumb or what.
  // till one of the list doesn't reaches NULL
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attaching the whole list that was left, its already sorted so we can do this.
  if (list1) {
    console.log("attached 66");
    current.next = list1;
  } else if (list2) {
    console.log("attached 70");

    current.next = list2;
  }

  // return pointer;
  return pointer.next;
};

// Time Complexity O(n+m)
// Space Complexity O(1) as no extra space is used
