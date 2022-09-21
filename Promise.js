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

function createpost(post) {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });

            const error = false;

            if (!error) {
                resolve();
            }

            else {
                reject('Error: Something went worng')
            }


        }, 2000)

    })

}


function deletpost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop());
            }

            else {
                reject('It is Empty')
            }
        }, 1000)
    })
}
createpost({ title: "post three", body: 'this is post three' }).then(getPosts);

createpost({ title: 'post four', body: 'this is post four' })
    .then(() => {

        getPosts()
        deletpost().then((delElmt) => {
            console.log(delElmt)
            getPosts();
            deletpost().then(() => {
                getPosts();
                deletpost().then(() => {
                    getPosts()
                    deletpost().then(() => {

                        getPosts()
                        deletpost().then(() => { }).catch((err) => {
                            console.log('Cache Block', err);
                        })
                    })




                }).catch((err) => { })

            }).catch((err) => { })
        })


    }).catch(err => console.log(err))

