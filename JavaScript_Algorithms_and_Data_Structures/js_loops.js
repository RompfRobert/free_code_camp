const myArray = [];
// create an array of [5,4,3,2,1,0] using a while loop
let i = 5;
while (i > -1) {
  myArray.push(i);
  i--;
}

const ourArray = [];
// create an array of [1,2,3,4,5] using a for loop
for (let i = 1; i < 6; i++) {
  ourArray.push(i);
}

console.log(myArray)
console.log(ourArray)