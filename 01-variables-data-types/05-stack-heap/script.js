const name = 'abdullah';
const age = 30

const person = {
    name: 'xyz',
    age: 123
};

let newName = name;
newName = 'mohammad';
console.log(name, newName);

let newPerson = person;
newPerson.name = 'abc';
console.log(person, newPerson);