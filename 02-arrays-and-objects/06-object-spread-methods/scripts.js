let x;

const todo = new Object();
todo.id = 1;
todo.title = 'Shopping';
todo.isCompleted = false;

// Object nesting
const person1 = {
    address: {
        coords: {
            lat: 34.789,
            lng: -52.897
        }
    }
};

x = todo;

x = person1;
x = person1.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
x = obj3;

// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

// Array of objects
const todos = [
    { id: 1, title: 'car wash' },
    { id: 2, title: 'clean house' },
    { id: 3, title: 'take our trash' },
]

x = todos;

x = todos[2].title;

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

person.isMarried = false;

// Get array of object keys
x = Object.keys(person);

// Get length of an object
x = Object.keys(person).length;

// Ge array of object values
x = Object.values(person)[3];
//x = Object.values(x);

// Get array of object key/value paris
x = Object.entries(todo);

// Check if object has a property
x = person.hasOwnProperty('age');

console.log(x);