var promise = Promise.resolve("MANHATTAN");

function attachTitle(name) {
    return res=("DR. "+name);
};

promise.then(attachTitle).then(console.log);




