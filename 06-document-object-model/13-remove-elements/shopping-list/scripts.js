// remove() Method
function removeClearButton() {
    const clrBtn = document.querySelector('#clear');
    clrBtn.remove();
}

// removeChild() Method
function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li');

    ul.removeChild(li);
}

// Other Examples
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}


function removeItemV2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

function removeItemV3(itemNumber) {
    const itemList = document.querySelectorAll('li');
    itemList[itemNumber - 1].remove();
}

const removeItemV4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
//removeFirstItem();
//removeItem(1);
//removeItemV2(2);
//removeItemV3(4);
removeItemV4(1);