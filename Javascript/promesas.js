var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Math.random() > 0.1) resolve('foo');
        else reject("shit")
    }, 300);
});

promise1.then(function (value) {
    console.log(value);
    // expected output: "foo"
}).catch(function (value) {
    console.log(value);
});



