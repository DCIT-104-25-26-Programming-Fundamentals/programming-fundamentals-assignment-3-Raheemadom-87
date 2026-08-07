// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
// =============================================================================

const readlineSync = require("readline-sync");

// Function to print the multiplication table for one number
function printTable(number) {
    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Function to print multiplication tables from 1 to N
function printTables(n) {
    if (n <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        printTable(i);
        console.log("------------------------------");
    }
}

// Main function
function main() {

    // Part A
    const number = readlineSync.questionInt("Enter a number: ");
    printTable(number);

    // Part B
    const n = readlineSync.questionInt("\nEnter a number (N): ");

    if (n <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    printTables(n);
}

// Run the program
main();