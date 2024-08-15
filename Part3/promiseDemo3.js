const pr = new Promise(function exec(res, rej) {
    console.log("Executor callback triggered by Promise constructor");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random()*100);
        if( randomNumber % 2 === 0 ) {
            // random number is even
            res(randomNumber);
        } else {
            // random number is odd
            rej(randomNumber);
        }
    }, 5000);
});

console.log("Created the promise object");
console.log(pr);