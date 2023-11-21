const social = ['Twitter', 'Facebook', 'LinkedIn', 'TikTok', 'Instagram'];

// View prototype chain
//console.log(social.__proto__);

// Long form
social.forEach(function (item) {
    console.log(item);
});

// short form
social.forEach((item) => console.log(item));

// We can also pass in the index and original array
social.forEach((value, index, originalArray) => console.log(`${index} - ${value}`, originalArray));

function printSocial(s) {
    console.log(s);
}

// Using a named function
social.forEach(printSocial);

