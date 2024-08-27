const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Timer of p1 done");
        res(100); // pending->fulfilled ; undefined -> 100
    }, 500);
});

const p2 = p1.then(function f() {console.log("f")}, function g() {console.log("g")} );
// // p2 is a new promise
// const p3 = p1.then(function h() {console.log("h")}, function i() {console.log("i")} );
// // p3 is also a new promise
