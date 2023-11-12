const d = new Date(2022, 1, 10, 11, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

console.log(month, hour);

// Immediate value evaluation
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not Jan, Feb or Mar!');
}

// Convert swithc to if else
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February')
} else if (month === 3) {
    console.log('March')
} else {
    console.log('Month is not Jan, Feb or Mar!');
}

const x = 10;
const y = 5;

if (x <= y) {
    console.log(`${x} is less than or equal to ${y}`);
} else {
    console.log(`${x} is gratter than ${y}`);
}

switch (x < y) {
    case true:
        console.log(`${x} is less than or equal to ${y}`);
        break;
    case false:
        console.log(`${x} is gratter than ${y}`);
        break;
}

// Range evaluation
switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
}