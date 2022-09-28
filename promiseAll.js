let p1 = Promise.resolve("Hi");
let p2 = 10;
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Goodbye")
    }, 2000)
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
})