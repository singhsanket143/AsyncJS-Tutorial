function manualException() {

    const randomNumber = Math.floor(Math.random()*100);

    if( randomNumber % 2 === 0 ) {
        // random number is even
        return randomNumber;
    } else {
        // random number is odd
        throw "Random number is odd";
    }

}

