const promise = new Promise((resolve, reject) => {
    // Where long running async tasks take place
    setTimeout(() => {
        // resolve("This is my resolved data");
        reject("Something went wrong")
    }, 5000);
    
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
});
