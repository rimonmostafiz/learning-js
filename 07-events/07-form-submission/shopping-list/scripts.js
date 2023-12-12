const form = document.querySelector('#item-form');

function onSubmit(e) {
    e.preventDefault();
    //console.log('submit');

    const item = document.querySelector('#item-input').value;
    const priority = document.querySelector('#priority-input');

    if (item === '' || priority.value === '0') {
        alert('Please fill in all fields');
    }

    console.log(item, priority.value);
}

function onSubmit2(e) {
    e.preventDefault();
    
    const formData = new FormData(form);

    //console.log(formData);
    //console.log(formData.get('item'));
    //console.log(formData.get('priority'));
    
    const entries = formData.entries();

    //console.log(entries);

    for (let entry of entries) {
        console.log(entry[1]);
    }
}

//form.addEventListener('submit', onSubmit);

form.addEventListener('submit', onSubmit2);