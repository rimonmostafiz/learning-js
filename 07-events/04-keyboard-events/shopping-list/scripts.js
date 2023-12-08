const itemInput = document.querySelector('#item-input');

const onKeyPress = function (event) {
    console.log('keypress');
    console.log(event);
}

const onKeyUp = event => {
    console.log('keyup');
    console.log(event);
}

const onKeyDown = e => {
    //console.log('keydown');
    //console.log(e);

    // key
    //console.log(e.key);
    // let currentText = document.querySelector('h1').innerText;
    // document.querySelector('h1').innerText = currentText.concat(e.key);

    // if (e.key === 'Enter') {
    //     alert('You pressed enter');
    // }

    // keyCode
    // https://www.toptal.com/developers/keycode/table

    if (e.keyCode === 13) {
        alert('You pressed enter');
    }

    // code
    if (e.code === 'Digit1') {
        console.log('you pressed 1');
    }

    if (e.repeat) {
        console.log('You are holding down ' + e.key);
    }

    console.log('Shift: ' + e.shiftKey);
    console.log('Ctrl: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);
}

//itemInput.addEventListener('keypress', onKeyPress);
//itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);