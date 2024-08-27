function* gen(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log("inside generator");
        if(i % 2 == 0)
            yield arr[i];
    }
}

const it = gen([1, 2, 3, 4, 5]);
console.log(it.next());
console.log("out");;
console.log(it.next());
console.log("out");;
console.log(it.next());
console.log("out");;