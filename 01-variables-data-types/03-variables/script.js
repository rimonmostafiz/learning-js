// var, let & const

let firstName = 'Mohammad';
const lastName = 'Abdullah';
let age = 25;

console.log('My Name is %s %s, and age is %d', firstName, lastName, age);

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (age));

firstName = "Mohammed";

console.log(firstName);

// Declare varibale without assignning value
let fName;
fName = 'XYZ'
console.log(fName);

// Re-assign let
fName = 'ABC';
console.log(fName);

// Naming Conventions
// - Only letters(upperCase, lower_case), numbers, underscores and doller signs
// - Can't start with number

let roll = 21;

// Multi-word naming conventions
// firstName = camelCase
// first_name = underscore / snake_case
// FirstName = PascalCase
// firstname = lowercase

console.log(score);

var score;
score = 1;
console.log(score);

const x = 100;
// we can't re-assing const varibale
// x = 120 // Will result an error

// we can manipulate arrays and objects using const
const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6, 7);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);

// assignment not possible but manipulation possible
// arr = ['x', 'y', 'z'];
// console.log(arr);

const person = {
    name: 'abdullah'
};
person.age = 27;
person.location = 'Dhaka';
console.log(person);

// multiple declaration and assignment
let a, b, c;
const d = 10, e = 20, f = 30;

console.log(a);
console.log(d);