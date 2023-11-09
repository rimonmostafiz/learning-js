let x;

// Square root
x = Math.sqrt(64);

// Absolute value
x = Math.abs(-5);

// Round
x = Math.round(4.49);

// Round up
x = Math.ceil(4.2);

// Round down
x = Math.floor(4.99);

// Exponent
x = Math.pow(2, 4);

// Minimum number
x = Math.min(12, 4, 5, 10);

// Maximum number
x = Math.max(12, 4, 5, 10);

// Get a random/decimal between 0 and 1
x = Math.random();

// Get a random number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);


let min = 10;
let max = 100;

// Get a random number between min and max(exclusive)
x = Math.floor(Math.random() * (max - min) + min);
// Get a random number between min and max(inclusive)
x = Math.floor(Math.random() * (max - min) + min);

console.log(x);