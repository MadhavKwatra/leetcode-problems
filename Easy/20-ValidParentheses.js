// Problem: 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const startingParentheses = ["(", "{", "["];
  let validParentheses = false;
  for (let char of s) {
    if (startingParentheses.includes(char)) stack.push(char);
    else if (stack.length) {
      const popped = stack[stack.length - 1];
      if (
        (char == ")" && popped == "(") ||
        (char == "}" && popped == "{") ||
        (char == "]" && popped == "[")
      ) {
        stack.pop();
        validParentheses = true;
      } else {
        validParentheses = false;
        break;
      }
    } else {
      // Stack is empty but have a closing bracket
      validParentheses = false;
      break;
    }
  }

  // STack is not empty
  if (stack.length) validParentheses = false;
  return validParentheses;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Could improve space by removing the variables like array Of Starting paranthesis and valid parentheses boolean
// Just use stack.length for true or false
