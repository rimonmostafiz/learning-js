// Log number
console.log(10);

// Log string 
console.log('learning js');

// Log multiple values
console.log(10, 'Hello World', true);

// Log a variable
const a = 100;
console.log(a);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Conditional Log
let age = 15;
ß
if (age < 0) {
    console.error('Age cant be negative number');
} else {
    console.log('age is', age);
}

// Log object 
const person = { name: 'Mr A', email: 'mra@mail.com' };
console.log(person);

// Log object as table
console.table(person);

// Log Group
console.group('my group')
console.log(a);
console.error('Alert');
console.warn('Warning');
console.log(a);
console.log(a);
console.groupEnd();

// Add css to logs
const abc = 'padding: 10px; background-color: white; color: green';
console.log('%c' + age, abc);