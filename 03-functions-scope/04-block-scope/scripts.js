const x = 100;

// An If statement is a block
if (true) {
    console.log(x);
    const y = 200;
    console.log(x + y);
}

//console.log(y) // ReferenceError: y is not defined

// A loop is a block
for (let i = 1; i <= 10; i++) { 
    console.log(i);
}
// instead of let use var in the loop variable and uncomment
//console.log(i); // ReferenceError: i is not defined

// Using var in block scope
if (true) {
    const a = 20;
    let b = 30;
    var c = 40;
}
// window.c
console.log(c);

// var IS function scoped
function run() {
    var d = 500;
    console.log(d);
}

run();
//console.log(d); // ReferenceError: d is not defined

const foo = 1;
var bar = 2; // Put on the window object