// parseInt() parses a string and converts it into an integer
console.log(parseInt("123")) // output: 123

function parseIntegers(string) {
    return parseInt(string);
}

// parseInt() can also take a second argument, which is an integer between 2 and 36. It specifies the base of the number in the string.
const a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
console.log(a);
