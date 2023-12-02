const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

console.log(text);
console.log(itemList);
console.log(items);

function run() {
    // className - Gets a string of all classes
    console.log(itemList.className);

    // Changing the classes with className
    //text.className = 'card dark';

    // classList - Array of classes, which also has method to add, remove, toogle or replace
    console.log(itemList.classList);

    // We can loop through the classes
    itemList.classList.forEach(c => console.log(c));

    // Add, remove, toggle, replace
    //text.classList.add('dark');
    //text.classList.remove('card');
    //text.classList.toggle('hidden');
    //text.classList.replace('card', 'dark');

    itemList.style.lineHeight = '3';

    items.forEach((item, index) => {
        item.style.color = 'green';
        if (index === 2) {
            item.style.color = 'red';
        }
    })

}

document.querySelector('button').onclick = run;