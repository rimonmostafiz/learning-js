function onClear() {
    //alert('clearn button clicked!');
    const itemList = document.querySelector('ul');
    const items = document.querySelectorAll('li');

    //itemList.innerHTML = '';

    //items.forEach(item => item.remove());

    while (itemList.firstChild) {
        console.log(itemList.firstChild);
        itemList.removeChild(itemList.firstChild);
    }
}

const clearBtn = document.querySelector('#clear');

// Javascript Event Listener
// clearBtn.onclick = function () {
//     alert('Clear Items');
// }

// clearBtn.onclick = function () {
//     console.log('item cleared');
// }

// clearBtn.addEventListener('click', function() {
//     alert('Clear Items!');
// });

//clearBtn.addEventListener('click', () => alert('clear imtes'));
//clearBtn.addEventListener('click', () => console.log('item cleared'));

clearBtn.addEventListener('click', onClear);

const removeClickEvent = function() {
    clearBtn.removeEventListener('click', onClear)
}

//setTimeout(removeClickEvent, 5000);

//setTimeout(() => clearBtn.click(), 5000);
