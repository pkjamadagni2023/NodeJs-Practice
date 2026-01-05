const f1 = () => {
    return new Promise((resolve, reject) => {
        //reject('f1 error');
        resolve('f1 result');
    })
}

const f2 = () => {
    return new Promise((resolve, reject) => {
        resolve('f2 result');
        //reject('f2 error');
    })
}

f1()
.then((result1) => {
    console.log(result1);
    return 'intermediate value';
}).then((a) => {
    console.log(a);
    return f2().catch((error) => {
        console.error('Caught error in f2:', error);
        return Promise.reject('Error propagated from f2');
    });
}).then((result2) => {
    console.log(result2);
}).catch((error) => {
    console.error('Error:', error);
});