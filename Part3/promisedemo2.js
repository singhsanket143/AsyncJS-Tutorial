const pr = new Promise(function exec(res, rej) {
    console.log("Executor callback triggered by Promise constructor");
    const randomNumber = Math.floor(Math.random()*100);
    if( randomNumber % 2 === 0 ) {
        // random number is even
        res();
    } else {
        // random number is odd
        rej();
    }
});

console.log("Created the promise object");
console.log(pr);