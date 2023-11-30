const div = document.createElement('div');
div.className = 'my-div-element'
div.id = 'my-div-id'
div.setAttribute('title', 'My Div Element');
//div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

document.body.appendChild(div);
