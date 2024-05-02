function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Take input from the user
let userInput = prompt("Enter a number:");

// Convert the user input to a number
let number = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
    // Call the function and display the result
    let result = isEvenOrOdd(number);
    console.log("The number " + number + " is " + result + ".");
} else {
    console.log("Invalid input. Please enter a valid number.");
}
