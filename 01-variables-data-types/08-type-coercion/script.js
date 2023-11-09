let x;

// Coerced to a string
x = 5 + '5';

x = 5 + Number('5');

// Coerced to a number
x = 5 * '5';

// null is coerced to 0 as it is a 'falsy' value
x = 5 + null;

x = Number(null);

x = Number(false);
x = Number(true);

x = 5 + true;
x = 5 + false;

x = Number(undefined);

x = 5 + undefined;

console.log(x, typeof x);