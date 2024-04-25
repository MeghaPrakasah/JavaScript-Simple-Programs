// Importing readline module to read input from command line
const readline = require('readline');

// Creating interface to read input from command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    // Check if num is divisible by any number from 2 to sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Prompting user to enter a number
rl.question("Enter a number: ", function(num) {
    // Parsing input to integer
    num = parseInt(num);

    // Checking if the number is prime
    if (isPrime(num)) {
        console.log(num, "is a prime number");
    } else {
        console.log(num, "is not a prime number");
    }

    // Closing the readline interface
    rl.close();
});
