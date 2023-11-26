// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[0].innerText);

//listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     // if (index % 2 == 0) {
//     //     item.style.color = 'blue';
//     // }

//     if (index === 1) {
//         item.remove();
//     }

//     if (index === 0) {
//         item.innerHTML = ` Oranges
//         <button class='remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);
const listItems2Array = Array.from(listItems2);

listItems2Array.forEach(element => {
    console.log(element.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);
