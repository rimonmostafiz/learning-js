// What is The Document Object Model (DOM)
// - Programing Interface for web/HTML elements
// - Structere that we can interact with via JavaScript
// - Includes tags, atrributes, text nodes, etc
// - Represented as a tree structure

// console.log(window);
// console.log(window.document);

// console.log(document);

// console.log(document.body.innerHTML);

console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World</h1>';

// document.write('<h1>Hello World</h1>');

console.log(document.getElementById('main'));
const main = document.getElementById('main');
//main.innerHTML = '<h1>Hello World</h1>';

document.querySelector('#main h1').innerText = 'Intro DOM';
