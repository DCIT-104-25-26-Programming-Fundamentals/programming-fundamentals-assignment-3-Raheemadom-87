// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
// =============================================================================

const readlineSync = require("readline-sync");

// Function to print the first N Fibonacci numbers
function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    let first = 0;
    let second = 1;

    process.stdout.write("Fibonacci sequence: ");

    for (let i = 0; i < n; i++) {
        process.stdout.write(first + " ");

        let next = first + second;
        first = second;
        second = next;
    }

    console.log();
}

// Function to check if a number is a Fibonacci number
function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first < number) {
        let next = first + second;
        first = second;
        second = next;
    }

    return first === number;
}

// Main function
function main() {

    // Part A
    const n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    // Part B
    const number = readlineSync.questionInt("\nEnter a number to check: ");

    if (isFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

// Run the program
main();