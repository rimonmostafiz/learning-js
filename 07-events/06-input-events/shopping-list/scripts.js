const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    //console.log('Input');
    //console.log(e.target);
    heading.textContent = e.target.value;
}

function onChecked(e) {
    console.log(e.target.checked);
    heading.textContent = e.target.checked ? 'Checked' : 'Not Checked';
}

function onFocus() {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}

function onBlur() {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

//itemInput.addEventListener('keypress', onInput); // doesn't give correct e.target.value
//itemInput.addEventListener('keypress', onInput); // doesn't give correct e.target.value

//itemInput.addEventListener('keyup', onInput);
//itemInput.addEventListener('input', onInput);
//priorityInput.addEventListener('input', onInput);
//priorityInput.addEventListener('change', onInput);
//checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);