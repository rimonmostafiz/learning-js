// while (condition) {
//     statements
// }

//let i = 1;

// while (i < 10) {
//     console.log('Number ' + i);
//     i++;
// }

// let x = 32429347;

// while (x % 10 != 0) {
//     console.log(x);
//     console.log(`${x % 10}`)
//     x = Math.floor(x / 10);
// }

const arr = [10, 20, 30, 40 , 50, 60];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// Do while loop - Always runs once
// do {
//     console.log(i);
//     i++;
// } while(i < arr[i]);

// Nested while loops
// while (i <= 10) {
//     console.log('Number ' + i);

//     let j = 1;
//     while (j <= 10) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++
//     }

//     i++;
// }

for (let i = 1; i <= 5; i++) {
    var s = ''
    for (let j = 1; j <= i; j++){
        s += `${i}`;
    }
    console.log(s);
}