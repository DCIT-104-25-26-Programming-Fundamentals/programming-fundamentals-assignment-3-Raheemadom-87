// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
// =============================================================================

const readlineSync = require("readline-sync");

// Function to read a matrix
function readMatrix(rows, cols, name) {
    console.log(`\nEnter values for ${name}:`);

    const matrix = [];

    for (let i = 0; i < rows; i++) {
        while (true) {
            const row = readlineSync
                .question(`Enter row ${i + 1}: `)
                .split(" ")
                .map(Number);

            if (row.length === cols) {
                matrix.push(row);
                break;
            } else {
                console.log(`Please enter exactly ${cols} values.`);
            }
        }
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

// Function to transpose a matrix
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const transpose = [];

    for (let j = 0; j < cols; j++) {
        const row = [];

        for (let i = 0; i < rows; i++) {
            row.push(matrix[i][j]);
        }

        transpose.push(row);
    }

    return transpose;
}

// Function to add two matrices
function addMatrices(matrix1, matrix2) {
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        const row = [];

        for (let j = 0; j < matrix1[0].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }

        result.push(row);
    }

    return result;
}

// Function to multiply two matrices
function multiplyMatrices(matrix1, matrix2) {
    const rowsA = matrix1.length;
    const colsA = matrix1[0].length;
    const colsB = matrix2[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];

        for (let j = 0; j < colsB; j++) {
            let sum = 0;

            for (let k = 0; k < colsA; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

// Main function
function main() {

    // ============================
    // Part A - Matrix Transpose
    // ============================
    console.log("PART A - Matrix Transpose");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols, "Matrix");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrix));

    // ============================
    // Part B - Matrix Addition
    // ============================
    console.log("\nPART B - Matrix Addition");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    const matrix1 = readMatrix(rows, cols, "Matrix A");
    const matrix2 = readMatrix(rows, cols, "Matrix B");

    console.log("\nSum of Matrices:");
    displayMatrix(addMatrices(matrix1, matrix2));

    // ============================
    // Part C - Matrix Multiplication
    // ============================
    console.log("\nPART C - Matrix Multiplication");

    const rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
    const colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

    const matrixA = readMatrix(rowsA, colsA, "Matrix A");

    const rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
    const colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (colsA !== rowsB) {
        console.log("Error: Matrix multiplication is not possible.");
        return;
    }

    const matrixB = readMatrix(rowsB, colsB, "Matrix B");

    console.log("\nProduct of Matrices:");
    displayMatrix(multiplyMatrices(matrixA, matrixB));
}

// Run the program
main();