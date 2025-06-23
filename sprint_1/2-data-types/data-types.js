/**
 * Задание 1.
 Создай переменные всех основных типов данных: строка, число, булево, null, undefined, symbol, BigInt,
 объект и массив.
 Напиши typeof для каждой.
 пример: console.log(typeof test)
 **/


// Код задания 1
let string = "string";
console.log(typeof string); //string

let number = 10;
console.log(typeof number); //number

let bool = true;
console.log(typeof bool); //boolean

let null_var = null;
console.log(typeof null_var); //object

let undefined_var;
console.log(typeof undefined_var); //undefined

const symbol = Symbol("symbol");
console.log(typeof symbol); //symbol

let big_int = BigInt(1231231231231221312);
console.log(typeof big_int); //bigint

let obj = {
    key : "value"
};
console.log(typeof obj); //object

let array = [1,2,3];
console.log(typeof array); //object


/**
 * Задание 2.
 Преобразуй строку "123" в число. Попробуй сложить "123" + 5 и Number("123") + 5.
 Объясни разницу.
 **/


// Код задания 2
let num = Number("123");
console.log(num);

let add1 = "123" + 5;
console.log(add1);  //так как складываются строка и число, то произойдёт неявное преобразование числа 5 в строку "5"
                    //затем складываются две строки и получается 1235

let add2 = Number("123") + 5;
console.log(add2); //выведет 128, так как здесь явное преобразование "123" в число, потому нормально складываются два числа


/**
 * Задание 3.
 Напиши функцию, которая принимает аргумент и возвращает строку: "Это строка", "Это число",
 и т.п. — в зависимости от типа.
 **/


// Код задания 3
function get_type(value) {
    let type = typeof value;
    switch(type) {
        case "string":
            return "Это строка";
        case "number":
            return "Это число";
        case "boolean":
            return "Это булевая переменная";
        case "bigint":
            return "Это большое число";
        case "undefined":
            return "Это значение не определено";
        case "symbol":
            return "Это символ";
        case "object":
            return "Это объект";
    }
}
console.log(get_type("str"));


/**
 Задание 4.
Чем отличаются undefined и null? Проверьте результат выполнения следующего кода.

    let a;
    let b = null;

    console.log(a == b);  // ?
    console.log(a === b); // ?
    console.log(typeof a); // ?
    console.log(typeof b); // ?
 **/

// Код задания 4
// undefined - тип, означающий что переменной не было присвоено значение, а null обозначает намеренное отсутствие значения
console.log(a == b);  //true
console.log(a === b); //false
console.log(typeof a); //undefined
console.log(typeof b); //object
