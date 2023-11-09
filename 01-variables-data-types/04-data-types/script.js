// String
const nickName = 'xyz';

// Number
const age = 30;
const temparature = -7.7;

// Boolean
const hasKids = false;

// Null
const cellNo = null;
console.log(cellNo);

// Undefied
let score;
console.log(score);
score = 2;
console.log(score);
score = undefined;
console.log(score);

// Symbol
const id = Symbol('id');
console.log(id);

// BigInt
const myBigInt = 739845702934534534534572039487n;
console.log(myBigInt);

const myBigInt2 = BigInt(7984355394571394456745645654645658342550);
console.log(myBigInt2);

// Referance Types

const num = [1, 2, 3];
console.log(typeof(num));

const person = {
    name: 'abc',
}
console.log(typeof(person));

function greet() {
    console.log("Hello");
}

const output = function greet() {
    console.log("Hello");
};
console.log(output, typeof output);

let greetFunction = function greetHello() {
    console.log("Hello World");
}
greetFunction();