const logo = document.querySelector('img');
const itemInput = document.querySelector('#item-input');

// function anyFunc(param) {
//     console.log("any function");
//     console.log(param);
// }

// anyFunc('xyz');

function onClick(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log('clicked');
    // e.target.style.backgroundColor = 'black';
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);
}

function keyPress(e) {
    if (e.key == 1 || e.key == 0) {
        console.log(1);
    } else {
        console.log(e.key);
        e.preventDefault();
    }
}

logo.addEventListener('click', onClick);
itemInput.addEventListener('keypress', keyPress);

// document.body.addEventListener('click', function(e) {
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

logo.addEventListener('drag', (e) => {
    document.querySelector('h1').textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

document.querySelector('#google')
.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target, 'google link clicked');
    console.log(e);
});

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/