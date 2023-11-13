const age = 22;

// Using an if statement
if (age >= 18) {
    console.log('You can vote!')
} else {
    console.log('You can not vote!');
}

// condition ? true expression : false expresssion;
// Using ternnary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can Vote' : 'You can not Vote';

console.log(canVote, canVote2);

// Multiple statements
const auth = true;

// Long Version
// let redirect;

// if (auth) {
//     alert('Welcome to dashboard!');
//     redirect = '/dashboard';
// } else {
//     alert('Access denied!');
//     redirect = '/login'
// }

// const redirect = auth
//     ? (alert('Welcome to dashboard!'), '/dashboard')
//     : (alert('Access denied!'), '/login');

if (auth) {
    console.log('Welcome to dashboard')
}

// Ternary with no else
auth ? console.log('Welcome to dashboard') : null;

// Shorthand for ternary with no else
auth && console.log('Welcome to dashboard');

//console.log(redirect);