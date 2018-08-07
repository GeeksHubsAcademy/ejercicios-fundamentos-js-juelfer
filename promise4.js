var promise = new Promise (function (fulfill, reject) {
    fulfill("I FIRED");
    var err = new Error ("I DID NOT FIRE");
    reject(err);
});

function onRejected(error) {
    console.log(error);
};
promise.then(onRejected,onRejected);


