function fetchNextElement(arr) {
    let idx = 0;
    function next() {
        // some logic
        if(idx >= arr.length) {
            return {value: undefined, done: true};
        }
        const newElement = arr[idx];
        idx++;
        return {value: newElement, done: false};
    }

    return {next};
}

// arr = [1, 2, 3, 4, 5] 
// fetchNextElement(arr) => 1
// fetchNextElement(arr) => 2
// fetchNextElement(arr) => 3
// fetchNextElement(arr) => 4
// fetchNextElement(arr) => 5
// fetchNextElement(arr) => undefined


const iterator = fetchNextElement([1, 2, 3, 4, 5]); // {next: function} 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());