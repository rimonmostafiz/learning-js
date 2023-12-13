// Link: https://www.javascripttutorial.net/wp-content/uploads/2020/02/JavaScript-event-bubbling.png
const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
    alert('Button Was Clicked!');
    e.stopPropagation();
});

div.addEventListener('click', (e) => {
    alert('Div was Clicked!');
});

form.addEventListener('click', (e) => {
    alert('Form Was Clicked!');
});

document.body.addEventListener('click', (e) => {
    alert('Body was Clicked!');
})