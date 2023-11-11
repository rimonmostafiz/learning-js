if (true) {
    console.log('this is true');
}

if (false) {
    console.log('this is not true');
}

const x = 50;
const y = 10;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

if (x === y) {
    console.log(`${x} is equal than ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
}

//console.log(z);

if (x > y) console.log(`${x} is greater than ${y}`);

// Shorthand If 
let z;
if (x > y) z = true;
else z = false;

// Shorthand with multiple line using comman(,) is not suggested
if (x > y) z = true, 
    console.log('inside if condition'), 
    console.log(`${x} is greater than ${y}`);
else z = false;
