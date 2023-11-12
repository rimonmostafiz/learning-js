console.log((10 > 20 && 25 / 5 === 5) || 10 < 30);
console.log(10 == 20 || 10 > 30 || 25 / 5 === 4)

// && - will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['One'];
posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20 || 30;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefied

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);