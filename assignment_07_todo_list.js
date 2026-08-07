// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
// =============================================================================

const readlineSync = require("readline-sync");

// Function to add a task
function addTask(tasks) {
    const task = readlineSync.question("Enter task: ");

    tasks.push(task);

    console.log(`Task added: "${task}"`);
}

// Function to view all tasks
function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }

    console.log("\nYour Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// Function to delete a task
function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }

    viewTasks(tasks);

    const taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber >= 1 && taskNumber <= tasks.length) {
        const removedTask = tasks[taskNumber - 1];
        tasks.splice(taskNumber - 1, 1);

        console.log(`Task "${removedTask}" has been removed.`);
    } else {
        console.log("Error: Invalid task number.");
    }
}

// Function to display the menu
function displayMenu() {
    console.log("\n============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

// Main function
function main() {
    const tasks = [];

    while (true) {
        displayMenu();

        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addTask(tasks);
                break;

            case 2:
                viewTasks(tasks);
                break;

            case 3:
                deleteTask(tasks);
                break;

            case 4:
                console.log("Goodbye!");
                return;

            default:
                console.log("Error: Invalid choice. Please enter a number from 1 to 4.");
        }
    }
}

// Run the program
main();