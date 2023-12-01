function createNewListItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);;
}

function createButton(classes) {

    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes) {
    console.log(classes);
    const icon = document.createElement('i');
    icon.className = classes;
    console.log(icon.className);
    return icon;
}

createNewListItem('Eggs');
createNewListItem('Fish');

