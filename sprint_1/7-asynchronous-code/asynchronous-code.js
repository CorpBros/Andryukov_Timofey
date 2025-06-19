
/**
 * Задание 1.
 * Напиши функцию `delayLog(msg, ms)`, которая выводит сообщение `msg` в консоль через `ms` миллисекунд.
 * Пример:
 * delayLog("Привет", 1000); // выведет "Привет" через 1 секунду
 **/

// Код задания 1

function delayLog(msg, ms) {
    setTimeout(() => console.log(msg), ms);
}

/**
 * Задание 2.
 * Напиши функцию `sequentialLogs()`, которая выводит 1, 2 и 3 с интервалами в 1, 2 и 3 секунды соответственно.
 **/

// Код задания 2

function sequentialLogs() {
    for (let i = 1; i <= 3; i ++) {
        setTimeout(() => console.log(i), 1000 * i);
    }
}

/**
 * Задание 3.
 * Напиши функцию `checkNumber(num)`, возвращающую Promise.
 * Если число больше 10 — промис должен выполниться с "OK", иначе — отклониться с "Too small".
 **/

// Код задания 3
function checkNumber(num) {
    const myPromise = new Promise((resolve, reject) => {
        if (num > 10)
            resolve("OK");
        else
            reject("Too small");
    })
    myPromise
        .then(result => console.log(result))
        .catch(error => console.error(error))
    return myPromise;
}


/**
 * Задание 4.
 * Напиши функцию `fakeFetch(url)`, которая возвращает промис.
 * Он "загружает" данные через 2 секунды, возвращая сообщение `${url} loaded`.
 **/

// Код задания 4

function fakeFetch(url) {
    const promise = new Promise(resolve => setTimeout(() => resolve(`${url} loaded`), 2000));
    promise.then(result => console.log(result));
    return promise;
}
fakeFetch("http://someurl.com");

/**
 * Задание 5.
 * Создай цепочку промисов, которая:
 * 1. Удваивает число 5.
 * 2. Прибавляет 10.
 * 3. Делит результат на 3.
 * 4. Выводит финальный результат.
 **/

// Код задания 5

async function operations(someNumber) {
    await new Promise(resolve => resolve(someNumber *= 2));
    await new Promise(resolve => resolve(someNumber += 10));
    await new Promise(resolve => resolve(someNumber /= 3));
    console.log(someNumber);
}
operations(25);

/**
 * Задание 6.
 * Напиши async-функцию `loadData`, которая вызывает `fakeFetch(url)` с использованием async/await.
 * Обработай ошибку с помощью try...catch.
 **/

// Код задания 6

async function loadData() {
    try {
        const result = await fakeFetch();
        console.log(result);
    }
    catch (error) {
        console.error("Ошибка:", error);
    }
}

/**
 * Задание 7.
 * Напиши функцию `loadAll(urls)`, которая использует Promise.all для параллельной загрузки массива URL.
 * После загрузки выведи все результаты.
 **/

// Код задания 7

const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("http://someurl1.com"), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve("http://someurl2.com"), 1500));
const fetchData3 = () => new Promise(resolve => setTimeout(() => resolve("http://someurl3.com"), 2000));

async function loadAll(urls) {
    try {
        const results = await Promise.all(urls);
        console.log(results);
    }
    catch (error) {
        console.error("Ошибка:", error);
    }
}

loadAll([fetchData1(), fetchData2(), fetchData3()]);

/**
 * Задание 8.
 * Напиши функцию `loadFirst(urls)`, которая использует Promise.race.
 * Она должна вернуть результат самого первого завершившегося запроса.
 **/

// Код задания 8

const fetchData4 = () => new Promise(resolve => setTimeout(() => resolve("http://someurl1.com"), 1500));
const fetchData5 = () => new Promise(resolve => setTimeout(() => resolve("http://someurl2.com"), 1000));

async function loadFirst(urls) {
    try {
        return await Promise.race(urls)
    }
    catch {
        console.error("Ошибка:", error);
    }
}

console.log(loadFirst([fetchData4(), fetchData5()]));

/**
 * Задание 9.
 * Напиши функцию `processSequentially(arr, asyncFn)`, которая вызывает `asyncFn` для каждого элемента массива последовательно.
 **/

// Код задания 9
let array = [1, 2, 3];
async function processSequentially(arr, asyncFn) {
    arr = await Promise.all(arr.map((el) => asyncFn(el)));
    console.log(arr);
}

processSequentially(array, async (value) => value += 1);



/**
 * Задание 10.
 * Напиши функцию `sleep(ms)`, которая возвращает промис, завершающийся через указанное количество миллисекунд.
 **/

// Код задания 10
function sleep(ms) {
    const promise = new Promise(resolve => setTimeout(() => resolve('done'), ms));
    promise.then(result => console.log(result));
    return promise;
}
sleep(1000);
