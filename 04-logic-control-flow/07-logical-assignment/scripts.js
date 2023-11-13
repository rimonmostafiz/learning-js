// ||= assigns the right side value only if the left is a falsy value

let a = true;

// if (!a) {
//     a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a);


// &&= assigns the right side value only if the left is a truty value

let b = false;

// if (b) {
//     b = 10;
// }

// b = b && 10;

b &&= 10;

console.log(b);

// Nullish coalescing assignment
// ??= assigns the right side value only if the left is null or undefired

let c = null;

// if (c === null || c === undefined) {
//     c = 20
// }

// c = c ?? 20;

c ??= 20;

console.log(c);