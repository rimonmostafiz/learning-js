// replaceWith() Method
function replaceFirstItem() {
    const firstItem = document.querySelector('li');
    //const firstItem = document.querySelector('li:nth-child(1)');
    //const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Fuji Apple';

    firstItem.replaceWith(li);
}

// OuterHTML Property
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Pupl Orange Juice</li>'
}

// Replace all Items
function replaceAllItem() {
    const itemList = document.querySelectorAll('li');

    itemList.forEach((item, index) => item.outerHTML = index === 1
        ? '<li>Second Item</li>'
        : '<li>item</li>');
}

// replaceChild() Method
function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    h2.style.color = 'green';
    header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItem();
replaceChildHeading();