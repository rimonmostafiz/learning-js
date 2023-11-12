//Falsy Values:
// - flase
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

//Truthy Values:
// - Everything else that is not falsy
// - ture
// - '0' (0 is a string)
// - ' ' (space in a string)
// - 'false' (flase is string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

//const x = function () {};
let x = 0 / 6;
console.log(x, typeof x);

// NOTE: Dividing the number 0 by 0 returns NaN. 
//       Dividing the positive number by 0 returns Infinity. 
//       Dividing the negative number by 0 returns -Infinity.

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
let children = 0;

if (children) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Solution 1
if (children !== undefined) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Solution 2
if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}


// Checking for empty arrays
const posts = ['asdfasdf'];

if (posts) {
    console.log('List Post: ');
    posts.forEach(p => console.log(p));
} else {
    console.log('No Post to List');
}

// check for lenght in the condition
if (posts.length) {
    console.log('List Post: ');
    posts.forEach(p => console.log(p));
} else {
    console.log('No Post to List');
}

// Checking for empty objects
const user = {}

if (user) {
    console.log('doing some work with user object');
} else {
    console.log('No User, so no work');
}

if (Object.keys(user).length) {
    console.log('doing some work with user object');
} else {
    console.log('No User, so no work');
}

// Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);