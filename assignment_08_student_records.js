// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
// =============================================================================

const readlineSync = require("readline-sync");

// Function to calculate the average score
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// Function to add a student
function addStudent(students) {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");

    const numberOfScores = readlineSync.questionInt("How many scores? ");

    const scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        scores.push(readlineSync.questionFloat(`Enter score ${i + 1}: `));
    }

    const student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// Function to display all students
function displayStudents(students) {
    if (students.length === 0) {
        console.log("No student records available.");
        return;
    }

    console.log("\n---------------------------------------------------------------");
    console.log("Name\t\tID\t\tScores\t\tAverage");
    console.log("---------------------------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        console.log(
            `${student.name}\t${student.id}\t${student.scores.join(", ")}\t${calculateAverage(student.scores).toFixed(2)}`
        );
    }

    console.log("---------------------------------------------------------------");
}

// Function to calculate average for a specific student
function findStudentAverage(students) {
    const id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                `${students[i].name}'s average score: ${calculateAverage(students[i].scores).toFixed(2)}`
            );
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

// Function to display the menu
function displayMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

// Main function
function main() {
    const students = [];

    while (true) {
        displayMenu();

        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent(students);
                break;

            case 2:
                displayStudents(students);
                break;

            case 3:
                findStudentAverage(students);
                break;

            case 4:
                console.log("Goodbye!");
                return;

            default:
                console.log("Error: Invalid menu choice.");
        }
    }
}

// Run the program
main();