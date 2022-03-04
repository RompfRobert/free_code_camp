let items = [];

items = [
    ["milk", 1],
    ["bread", 0.9],
    ["banana", 1.2],
    ["chicken", 2.5],
    ["water", 2],
];

console.log(items[1][1])
console.log(items[3][0])

// FUNCTIONS 
function functionWithArgs(num1, num2) {
    return num1 + num2;
}

console.log(functionWithArgs(1,2));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// GLOBAL SCOPE
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}