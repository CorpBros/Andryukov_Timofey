// Код задания 1

/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
    let count = n;
    return function () {
        console.log(count ++);
    };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12


// Код задания 2
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    let val = init;
    for (let el of nums) {
        val = fn(val, el);
    }
    return val;
};

console.log(
    reduce([1,2,3,4],function(accum,curr) {return accum + curr;},0)
);

// Код задания 3
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let args_to_str = args.join('');
        if (!cache[args_to_str]) {
            let value = fn(...args);
            cache[args_to_str] = value;
        }
        return cache[args_to_str];
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1


// Код задания 4
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
var addTwoPromises = async function(promise1, promise2) {
    const results = await Promise.all([promise1, promise2]);
    return results[0] + results[1];
};

addTwoPromises(promise1, promise2).then(console.log);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Код задания 5

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    let new_arr = [];
    let index = 0;
    while(index < arr.length) {
        let start = index;
        let end = Math.min(start + size, arr.length);
        let ch = arr.slice(start, end);
        new_arr.push(ch);
        index += size;
    }
    return new_arr;
};
console.log(chunk([],1));


// Код задания 6

// Код задания 7

// Код задания 8

// Код задания 9

// Код задания 10
