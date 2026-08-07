// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
// =============================================================================

const readlineSync = require("readline-sync");

// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}

// Function for modulus
function modulus(a, b) {
    if (b === 0) {
        return null;
    }

    return a % b;
}

// Function for exponentiation
function exponentiate(a, b) {
    return a ** b;
}

// Function to display the menu
function displayMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// Main function
function main() {
    while (true) {
        displayMenu();

        const choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice === 7) {
            console.log("Goodbye!");
            break;
        }

        if (choice < 1 || choice > 7) {
            console.log("Error: Invalid menu choice.");
            continue;
        }

        const num1 = readlineSync.questionFloat("Enter first number : ");
        const num2 = readlineSync.questionFloat("Enter second number: ");

        switch (choice) {
            case 1:
                console.log(
                    `Result: ${num1} + ${num2} = ${add(num1, num2).toFixed(2)}`
                );
                break;

            case 2:
                console.log(
                    `Result: ${num1} - ${num2} = ${subtract(num1, num2).toFixed(2)}`
                );
                break;

            case 3:
                console.log(
                    `Result: ${num1} * ${num2} = ${multiply(num1, num2).toFixed(2)}`
                );
                break;

            case 4: {
                const result = divide(num1, num2);

                if (result === null) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    console.log(
                        `Result: ${num1} / ${num2} = ${result.toFixed(2)}`
                    );
                }
                break;
            }

            case 5: {
                const result = modulus(num1, num2);

                if (result === null) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    console.log(
                        `Result: ${num1} % ${num2} = ${result.toFixed(2)}`
                    );
                }
                break;
            }

            case 6:
                console.log(
                    `Result: ${num1} ** ${num2} = ${exponentiate(num1, num2).toFixed(2)}`
                );
                break;
        }
    }
}

// Run the program
main();