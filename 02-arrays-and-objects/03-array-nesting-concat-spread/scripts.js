let x;

const fruits = ['apple', 'bannana', 'orange'];
const berries = ['strawbeery', 'blueberry', 'rasberry'];

const p = [['apple', 'bannana', 'orange'], [1, 2, 3]];

// Nesting arrays

// Nesting berries inside of fruits
// fruits.push(berries);

// Now we can access 'blueberry' with the following
// x = fruits[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

// concat() - concatenate arrays
x = fruits.concat(berries);

// spread operator (...) - concatenate with
x = [...fruits, ...berries];

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');

/*
let str = 'habijabi'
x = Array.from(str);
x = x[0].toUpperCase() + ',' + x.slice(1);
x = x.split(',').join('');
*/

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);