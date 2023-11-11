const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age
}

// Destructuring

const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'John',
        age1: 30
    }
}

const { id: todoId, title, user: { name, age1 } } = todo;

console.log(todoId, title, name, age1);

// Destructering array 
const numbers = [2, 4, 6, 8, 10];

const [first, second] = numbers;

const [x, y, z, ...rest] = numbers;

console.log(x, y, z, rest);
