const myArr = [2,3,4]

function sum(arr, n) {
    if (n === 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

  console.log(sum(myArr, 1));

  // Create a countdown fucntion using recursion
function countdown(n){
  if (n < 1) {
    return []
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// Use recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}