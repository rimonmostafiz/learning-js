const blogPost = {
    id: 'xyzttt',
    title: 'JSON Introduction',
    body: 'This is the introduction to JSON'
}

const jsonString = JSON.stringify(blogPost);

const jsonObj = JSON.parse(jsonString);

const posts = [
    {
        id: 1,
        title: 'first blog post',
        author: 'Author 1'
    },
    {
        id: 1,
        title: 'second blog post',
        author: 'Author 2'
    }
]

const postString = JSON.stringify(posts);

const postObj = JSON.parse(postString);

console.log(postString);