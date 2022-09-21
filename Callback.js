const posts = [
    {
        title: 'post one',
        body: 'this is post one',
        createdAt: new Date().getTime()
    },

    {
        title: 'post two',
        body: 'this is a post two',
        createdAt: new Date().getTime()
    }
];

let intervelId;
function getPosts() {

    clearInterval(intervelId);
    intervelId = setInterval(() => {

        let output = '';

        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title} - last updated ${[new Date().getTime() - posts[i].createdAt] / 1000}</li>`;

        }
        console.log('timer running id =', intervelId);
        document.body.innerHTML = output;

    }, 1000)



}

function createpost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000)
}

createpost({ title: 'post three', body: 'this is post three' }, getPosts)

function create4thpost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000)
}

create4thpost({ title: 'post four', body: 'this is post four' }, getPosts)