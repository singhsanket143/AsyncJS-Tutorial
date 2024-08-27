function* myGenerator() {
    console.log("inside generator");
    yield 100;
    console.log("line 4");
    yield 99;
    console.log("line 6");
    yield 87;
    console.log("line 8");
    yield -1;
    console.log("line 10");
}

const i = myGenerator();
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");
console.log(i.next());
console.log("out");