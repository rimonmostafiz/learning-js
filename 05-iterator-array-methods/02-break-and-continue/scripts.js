// Break
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

const arr = [324, 5, 87, 94, 35, 58, 33];
let searchNumber = 87;
let isPresent = false;
let index = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchNumber) {
        isPresent = true;
        index = i;
        break;
    }
}

if (isPresent) {
    console.log(`Found ${searchNumber} at ${index} in arr`);
} else {
    console.log(`Did not Found ${searchNumber} in arr`);
}

// Continue
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        continue;
    }
    console.log(i);
}