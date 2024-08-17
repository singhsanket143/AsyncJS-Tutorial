function download(url) {
    return new Promise(function exec(res, rej) {
        console.log("Started downloading data from", url);
        setTimeout(function () {
            let data = "Some data from " + url;
            console.log("Downloaded data from", url);
            res(data);
        }, 3000);
    });
}   


function writeFile(data, fileName) {
    return new Promise(function exec(res, rej) {
        console.log("Writing", data, " to file");
        setTimeout(() => {
            console.log("Writing to file ", fileName, " is done");
            let status="Success";
            res(status);
        }, 2000);
    })
}

function upload(fileName, url, callback) {
    // fileName tells the name of the file to be uploaded
    return new Promise(function exec(res, rej) {
        console.log("Uploading file ", fileName, " to ", url);
        setTimeout(() => {
            console.log("Upload is done");
            let uploadStatus = "Success";
            rej(uploadStatus);
        }, 3000);
    })
}

// This is parallel execution
// download("https://www.example.com")
// .then(function f(value) {
//     console.log("Downloaded data is", value);
// })

// writeFile("Some data", "file.txt")
// .then(function f(value) {
//     console.log("Write status is", value);
// })

// upload("file.txt", "https://www.example1.com")
// .then(function f(value) {
//     console.log("Upload status is", value);
// })

// download -> waiting for downloading to complete -> we execute function f -> f calls writefile -> 
// when file writing is done p2 is resolved -> then g is executed -> g calls upload -> when upload is done
// p3 is resolved -> then h is executed
// const p2 = download("https://www.example.com")
// .then(function f(value) {
//     console.log("Downloaded data is", value);
//     return writeFile(value, "file.txt");
// })

// const p3 = p2.then(function g(value) {
//     console.log("file written", value);
//     return upload(value, "https://www.example1.com");
// });

// p3.then(function h(value) {
//     console.log("file uploaded", value);
// })

// another way of doing same thing

// .then chaining
download("https://www.example.com")
.then(function f(value) {
    console.log("Downloaded data is", value);
    return writeFile(value, "file.txt");
})
.then(function g(value) {
    console.log("file written", value);
    return upload(value, "https://www.example1.com");
})
.then(function h(value) {
    console.log("file uploaded", value);
})
.catch(function i(value) {
    console.log("Error occured", value);
})