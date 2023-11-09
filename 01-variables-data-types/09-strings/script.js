let x;

const name = 'Mohammad';
const age = 30;

// Concatenation
x = "Hi, my name is " + name + " " + "and I'm " + age +
    " " + "years old."

// Template Literals
x = `Hello, my name is ${name} and I'm ${age} years old`;

const s = new String("Hello World");
x = typeof s;


// Length of String object
x = s.length;

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// Access value by key
x = s[1]

// Change case
x = s.toUpperCase();
x = s.toLocaleLowerCase();

// charAt() - returns the character at the specefied index
x = s.charAt(3);

// indexOf() - reaturn the index of the first occuence of a specefied value in a string
x = s.indexOf('o')

// substring() - search a string for a specified value
// begin - is inclusive
// end - excluside
x = s.substring(2, 5);
x = s.substring(0, 3)
x = s.substring(6);

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);

// trim() - remove whitespace from beginning and end of a string
x = '     HelloWorld      ';
x = x.trim();

// replace() - replace particular char instances of a string, first one
x = s.replace("rld", "xyz");

// includes() - returns true if the string is found
x = s.includes('rld');

//valueOf() - returns the primitive value of a variable
x = s.valueOf();

x = `Hello my name is ${name} and I'm ${age} years old`;

// split() - returns an arry of strings
x = x.split('');


console.log(x, typeof x);

class Person {
    constructor(f, l, a) {
        this.firstName = f;
        this.lastName = l;
        this.age = a;
    }
    printFullName() {
        return this.firstName + " " + this.lastName;
    }
}

const p = new Person('abc', 'xyz', 25);
console.log(p.printFullName());

