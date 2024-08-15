const pr = new Promise((res, rej) => {
    console.log("Executor callback triggered by Promise constructor");
    for(let i = 0; i < 10000000000; i++) {}
});

console.log("Created the promise object");
console.log(pr);