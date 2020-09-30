// Simulating a Python decorator
// A memoization case


function decorator(aFunc) {
    let cache = {};
    function inner(argument) {
        if (cache[argument] !== undefined) {
            return cache[argument];
        } else {
            cache[argument] = aFunc(argument);
        }
        return cache[argument];
    }
    inner.cache = cache;
    return inner;
}


function fibonacci(n) {
    if (n < 3) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

fibonacci = decorator(fibonacci);

console.log(fibonacci(45));
