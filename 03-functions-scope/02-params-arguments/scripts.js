// Default params
function registerUser(user = 'NoBody') {
    return user + ' is registered!'
}

console.log(registerUser('John'));
console.log(registerUser());

// Rest Params
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5, 30, 55, 25));


// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John'
};

console.log(loginUser(user));
console.log(loginUser({id: 2, name: 'Wick'}));

// Arrays a params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));