// Define a function
function grettings() {
    console.log('Hello from JS Function!');
}

// Invoke / execute / call a function
grettings();

// Define a function with parameter
function add(num1, num2) {
    console.log(num1 + num2);
}

// Invoke function with argument
add(10, 20);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function
// Arguments are the values that are passed into the function

// Returning a value
function subtract(num1, num2) {
    return num1 - num2;

    console.log(num1, num2);
}

console.log(subtract(20, 10));

let subResult = subtract(15, 10);

console.log(subResult);
