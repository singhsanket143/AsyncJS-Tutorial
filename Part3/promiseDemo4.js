const p1 = new Promise((res, rej) => {
    console.log("Executor callback triggered by Promise constructor: p1");
    setTimeout(() => {
        console.log("Timer of p1 done");
        res(100); // pending->fulfilled ; undefined -> 100
    }, 500);
});
p1.then(function a() {console.log("a")}, function b() {console.log("b")} );
setTimeout(function timerCB() {
    console.log("timer 1 done");
}, 2000); // timer of 1 sec
const pr = new Promise(function exec(res, rej) {
    console.log("Executor callback triggered by Promise constructor");
    setTimeout(function prCB() {
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if( randomNumber % 2 === 0 ) {
            // random number is even
            res(randomNumber);
        } else {
            // random number is odd
            rej(randomNumber);
        }
    }, 3000);
});
pr.then(function f(v) {console.log("executing f", v) }, function g(v){ console.log("executing g", v) });
pr.then(function h(v) { console.log("execution h", v) }, function i(v) { console.log("executing i", v) });
for(let i = 0; i < 10000000000; i++) {}