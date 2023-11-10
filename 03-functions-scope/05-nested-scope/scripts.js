function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }

    // console.log(y);
    
    second();
}

first();

if (true) {
    const x = 800;

    if (x === 800) {
        const y = 200;
        console.log(x + y);
    }

    // console.log(y);
}

