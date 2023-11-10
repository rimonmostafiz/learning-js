//const user = 'Max'; //Identifier 'user' has already been declared (at scripts.js:1:1)

(function () {
    const user = 'Max';
    console.log(user);

    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function (name) {
    console.log(`Hello ${name}`);
})('Wick');

var i = 0;

(function () {
    console.log('Hello');
})();