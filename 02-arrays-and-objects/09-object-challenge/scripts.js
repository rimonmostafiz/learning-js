// Step 1
const library = [
    {
        title: 'title 1',
        author: 'author 1',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'title 2',
        author: 'author 2',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'title 3',
        author: 'author 3',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

console.log(library);

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//library.forEach( book => book.status.read = true )

console.log(library);

// Step 3
const { title: firstBook } = library[0];

console.log(`The first book's title is ${firstBook}`);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);