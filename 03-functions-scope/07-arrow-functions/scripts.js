// Normal function declaration
// function add(a, b) {
//     return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
    // console.log(`I'm going to add ${a} and ${b} and return the result`)
    // const sum = a + b;
    // console.log(`The result is ${sum}`);
    // return sum;
    return a + b;
    
};

// Implicit Return
const subtract = (a, b) => a - b;

const arr = [1, 2, 3, 4, 5, 6, 7];

const challangeAns = (arr) => arr.slice(1, 4).reverse().toString().charAt(0);



//add(30, 20);
console.log(add(30, 20));
//subtract(30, 20);
console.log(subtract(30, 20));
//console.log(add(30, 20));

// Can leave off () with a single param
const square = a => a * a;
console.log(square(25));

// Arrow function beheavior is similar to regular function,
// we can also add default value 
const double = (a, b = 20) => a * b * 2;

console.log(double(100, 50));
console.log(double(100));

// Returning an object
const createObj = () => ({ 
    id: 1 
});

const x = createObj();

console.log(x);

const numbers = [1, 2, 3, 4, 5, 6];

for (const n of numbers) {
    console.log(n);
}

numbers.forEach(function(n) {
    console.log(n);
});

// Arrow function in a callback
numbers.forEach(n => console.log(n));