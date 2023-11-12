const d = new Date(2023, 10, 10, 21, 0, 0);
const hour = d.getHours();

console.log(d, hour);

// if, else if, else 
if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
}

// if, else if
if (hour < 6) {
    console.log('No Grettings, Still Sleeping...');
} else if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 17) {
    console.log('Good Afternoon');
} else if (hour < 19) {
    console.log('Good Evening')
}

console.log('----------')

// nested if and nested if inside else
if (hour < 12) {
    console.log('Good Morning!');

    if (hour === 6) {
        console.log('Wake up!');
    } else if (hour <= 8) {
        console.log('Breakfast time!');
    }
} else if (hour < 15) {
    console.log('Good Afternoon');
} else if (hour < 19) {
    console.log('Good Evening')
} else {
    console.log('Good Night');

    if (hour >= 22) {
        console.log('zzzzzzz');
    }
}

// 8AM to 4PM
// multiple condition inside if
if (hour >= 8 && hour <= 16) {
    console.log('Office time');
}

// 6AM or 9AM
if (hour === 6 || hour === 21) {
    console.log('Brush your teeth!');
}

