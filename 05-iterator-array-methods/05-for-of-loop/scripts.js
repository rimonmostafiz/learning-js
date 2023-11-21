// Loop through array
const items = ['book', 'table', 'chair', 'kite'];
const objs = [{name: 'book'}, {name: 'table'}, {name: 'chair'}];

// for (const item of items) {
//     console.log(item);
// }

for (const obj of objs) {
    console.log(obj);
}

const str = 'My Name Is Khan';

for (const letter of str) {
    console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'XYZ');
map.set('age', 30);

for (const [key, value] of map) {
    //console.log(key);
    //console.log(map.get(key));
    console.log(key, value);
}
