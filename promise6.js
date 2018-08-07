var promise = Promise.resolve('SECRET VALUE');
var promise = Promise.reject(new Error('SECRET VALUE'));

promise.catch(function (err) {
    console.error('QUIETOR!!');
    console.error(err.message);
});