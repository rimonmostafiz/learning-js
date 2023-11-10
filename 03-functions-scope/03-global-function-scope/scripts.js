// Global Scope
// Function Scope
// Block Scope

//alert('this is an alert');
console.log(window.innerWidth);
console.log(innerHeight);

const x = 100;

console.log(x, 'in global');

function run() {
    // Access global vars in function
    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

// Access global vars in blocks
if (true) {
    const tp = 9000;
    console.log(x, 'in block');
}

// block scope variable can't be access outside of the block
// console.log(tp);

function add() {
    //Overriding global x (variable shadowing)
    const x = 1;
    const y = 50;
    console.log(x + y);
}

add();

// function scope variable can't be accesss outside of the function
// console.log(y);