const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//     console.log(accumulator, currentValue)
//     let x = accumulator + currentValue;
//     console.log(x);
//     return x;
// }, 0);

// let redFunction = function(accumulator, currentValue) {
//     console.log(accumulator, currentValue)
//     let x = accumulator + currentValue;
//     console.log(x);
//     return x;
// }
// const sum1 = numbers.reduce(redFunction, 0);

const sum2 = numbers.reduce((a, c) => a + c, 0);
console.log(sum2);


// Shopping cart example (objects)
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce((accPrice, currObj) => accPrice + currObj.price, 0);

console.log(total);
