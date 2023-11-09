let x;

// Creating an object
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '100 S Main St',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['biking', 'fishing']
};

// Accessing object properties
x = person.name; // dot notation
x = person.address.city;
x = person['age']; // braket notation
x = person['isAdmin'];
x = person['address']['street'];
x = person.address['city'];

// Updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;
x = person.isAdmin;

// Deleting properties
//delete person.age;

person.isEmployed = true;
person['isMarried'] = false;

person.greet = function() {
    // let name;
    // let age;
    // let location;
    console.log(`Hello, this is ${this.name}`);
}

person.greet();

const person2 = {
    'first name': 'Josh',
    'last name': 'Tinckel'
};

x = person2['first name'];

console.log(x);