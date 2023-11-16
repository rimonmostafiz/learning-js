// for ([initialExpression]; [conditionExpress]; [incrementExpresssion]) {
//      statements;
// }

// INITIAL EXPRESSION - Initialize a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or unitll the condition is false
// INCEMENT/DECREMENT EXPRESION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To Execute a `block` of code use the {} syntax

for (let count = 1; count <= 5; count++) {
    console.log(count);
}

// Before anything else 
// let count = 1;
// step 1
// count <= 5 // true
// console.log(count);
// count ++

// step 2
// count = 2
// count <= 5 // true
// console.log(count);
// count++

// step 3
// count = 3
// count <= 5 // true
// console.log(count);
// count ++

// step 4
// count = 4
// count <= 5 // true
// console.log(count);
// count ++

// step 5
// count = 5
// count <= 5 // true
// console.log(count);
// count ++

// step 6
// count 6
// count <= 5 // false


// Nested Loops
// for (let i = 1; i <= 10; i++) {
//     console.log('Number is ' + i);

//     for (let j = i; j <= 5; j++) {
//         console.log(`${i} * ${j} = ${ i * j}`);
//     }
// }

// Nested Loops
for (let i = 1; i <= 30; i++) {
    console.log('Number is ' + i);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

const names = ['A', 'B', 'C', 'D', 'E'];

for (let i = 0; i < names.length; i++) {
    // if (names[i] == 'C') console.log(`${names[i]} is my best friend!`);
    // else console.log(names[i]);
    names[i] == 'C'
        ? console.log(`${names[i]} is my best friend!`)
        : console.log(names[i]);
}
