// The Math.random only generates a random decimal number between 0 and 1 but never 1
randomDecimals = Math.random();
console.log(randomDecimals);

// To get full numbers between a certain range we need to multiply by 10 or any other number, but never 10
randomWholeNumber = Math.floor(Math.random() * 10);
console.log(randomWholeNumber);

// Here is a function to generate a random number between a range we define. This also includes our Max number.
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(2, 8))