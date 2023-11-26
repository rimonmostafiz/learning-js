// document.getElementById()
let appTitleEl;

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

console.log(document.getElementById('app-title')
.getAttribute('class'));

// Set attributes
//document.getElementById('app-title').id = 'new-id';
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'page-header');
//console.log(document.getElementById('app-title'));

const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.background = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// ES6/ES 2015
// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type=text]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';