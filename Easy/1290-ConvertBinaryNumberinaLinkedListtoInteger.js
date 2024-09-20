/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// var getDecimalValue = function(head) {
//     let currentNode = head;
//     const arrayOfVals = []
//     while(currentNode!==null){
//         arrayOfVals.unshift(currentNode.val);
//         currentNode = currentNode.next;
//     }

//     return arrayOfVals.reduce((total,value,index)=>{
//         return total+value*2**index
//     })
// };
// O(n)+O(n)

// Thought of a better solution while about to view top solution ,but couldn't solve. Implemented the top solution myself.
var getDecimalValue = function (head) {
  let currentNode = head;
  let finalSum = 0;
  while (currentNode !== null) {
    finalSum = (finalSum << 1) | currentNode.val;
    currentNode = currentNode.next;
  }

  return finalSum;
};
