

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // After 3 seconds, resolve the promise with the message
        resolve("resolved after 3 seconds");
    }, 3000);
}).catch((err) => {
    console.log(err);
    return "second promise rejected";
});

secondPromise
    .then((promiseValue) => {
        console.log(promiseValue); // Logs: "resolved after 3 seconds"
        // Return the firstPromise
        return new Promise((resolve, reject) => {
            const isGoingGood = false;
            if (isGoingGood) {
                resolve("everything going good");
            } else {
                reject("Everything not going good");
            }
        }).catch((err) => {
            console.log(err); // Logs: "Everything not going good"
            // Return a fallback value if the promise is rejected
            return "first promise rejected";
        });
    })
    .then((promiseValue) => {
        // Logs: "first promise rejected" or "everything going good"
        console.log(promiseValue);
    })
    .catch((err) => {
        // This will log any unexpected errors that occur in the promise chain
        console.log(err);
    });
