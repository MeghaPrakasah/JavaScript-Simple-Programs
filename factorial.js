// // Function to calculate factorial
// function factorial(n) {
//     if (n === 0 || n === 1)
//         return 1;
//     for (var i = n - 1; i >= 1; i--) {
//         n *= i;
//     }
//     return n;
// }

// // Prompting user to enter a number
// var num = parseInt(prompt("Enter a number:"));

// // Calculating factorial
// var result = factorial(num);

// // Displaying the result
// console.log("Factorial of", num, "is", result);

// Importing readline module to read input from command line
const readline = require('readline');

// Creating interface to read input from command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

// Prompting user to enter a number
rl.question("Enter a number: ", function(num) {
    // Parsing input to integer
    num = parseInt(num);

    // Calculating factorial
    var result = factorial(num);

    // Displaying the result
    console.log("Factorial of", num, "is", result);

    // Closing the readline interface
    rl.close();
});
