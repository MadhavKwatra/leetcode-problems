// 1614. Maximum Nesting Depth of the Parentheses

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  // let maxDepth = 0;
  // const stack = [];
  // const brackets = ["(", ")"]
  // for (let c of s) {
  //     if (brackets.includes(c)) {
  //         if (c === ")") {
  //             if (stack.length > maxDepth)
  //                 maxDepth = stack.length;
  //             stack.pop();
  //         } else
  //             stack.push(c);
  //     }
  // }
  // return maxDepth

  // AFter seeing the most upvoted solution
  let maxDepth = 0;
  let count = 0;
  for (let c of s) {
    if (c === "(") {
      count++;
      if (count > maxDepth) maxDepth = count;
    } else if (c === ")") count--;
  }
  return maxDepth;
};
