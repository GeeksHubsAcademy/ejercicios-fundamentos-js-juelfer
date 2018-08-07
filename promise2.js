var promise = new Promise(function (fulfill, reject) {
  fulfill("FULFILLED!");
});

promise.then(setTimeout(() => {
    console.log("FULFILLED!")
}, 300));