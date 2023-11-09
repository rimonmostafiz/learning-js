// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 15 % 4;

// Concatination
x = 'Hello' + ' ' + 'World'

// Exponent
x = 2 ** 9;

// Increment
x = 1;
//x = x + 1;
x++;
x++;

// Decrement
x = x - 1;
x--

// 2. Assignment Operators
x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x **= 5;
x %= 5;

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';

// Equal to (Type and value)
x = 2 === '2';

// Not equla to (Just the value, not the type)
x = 2 != '2';

// Not equal to (Type and value)
x = 2 !== '2';

// Greater than and less than

x = 10 > 5;
x = 10 < 5;
x = 10 >= 5;
x = 10 >= 10;
x = 10 <= 5;
x = 2 <= 5;


console.log(x, typeof x);