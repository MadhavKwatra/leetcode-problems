/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answerArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) answerArray.push("FizzBuzz");
    else if (i % 3 === 0) answerArray.push("Fizz");
    else if (i % 5 === 0) answerArray.push("Buzz");
    else answerArray.push(i.toString());

    console.log(answerArray);
  }

  return answerArray;
};

// A one line solution i thought
// use map with index but its not array.
