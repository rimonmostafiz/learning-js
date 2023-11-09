let x;

const num = new Number(42.387);

console.log(num, typeof num);

// toString() - returns string representation of the number
x = num.toString();

// to get the length
x = num.toString().length;

// toFixed() - return a string representation of a number with a specified numer of decimals
x = num.toFixed(2);

// toPrecision() - return a number with the specified lenght
x = num.toPrecision(3);

// toLocaleString() - return a string representation of a number, using the current locale
x = num.toLocaleString('bn-BD');

// valueOf - get the primitive value
x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x, typeof x);