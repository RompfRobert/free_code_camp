const myArr = [2,3,4]

function sum(arr, n) {
    if (n === 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

  console.log(sum(myArr, 1))