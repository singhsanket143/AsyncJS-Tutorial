setTimeout(function f() {
    console.log('Hello');
}, 10);

setTimeout(function g() {
    console.log('wow');
}, 5);

let x = 0;

for(let i = 0; i < 1000000000; i++) {
    x = x + i;
} 