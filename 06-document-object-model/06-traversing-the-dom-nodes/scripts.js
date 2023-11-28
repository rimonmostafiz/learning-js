// https://www.w3schools.com/jsref/prop_node_nodetype.asp
let output;

const parent = document.querySelector('.parent');

console.log(parent.childNodes);
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[3].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// getting parents node from child
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);