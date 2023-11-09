let x;

// Array Literal
const numbers = [12, 28, 33, 37, 29, 100];
//[ 0,  1,  2,  3,  4,   5]

const midex = [12, 'hello', null, true, undefined];

x = numbers[0];

x = numbers[0] + numbers[3];

x = midex[3];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = `My favorite fruit is ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

x = fruits;

// length is not read-only
// fruits.lenght = 2;
fruits[2] = 'straberry';

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

console.log(x);