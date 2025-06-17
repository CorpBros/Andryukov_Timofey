/**
 * Задание 1.
 Напиши функцию greet(name), которая возвращает строку "Привет, [name]!"
 **/

// Код задания 1

function greet(name) {
   return `Привет, ${name}!`;
}
console.log(greet("Алиса"));

/** Задание 2.
 * Перепиши функцию `multiply` в виде стрелочной функции.
 * function multiply(a, b) {
 *     return a * b;
 * }
 *  **/

// Код задания 2
const multiply = (a, b) => a * b;
console.log(multiply(2,3));

/**
 * Задание 3.
 Создай стрелочную функцию sum, которая принимает два числа и возвращает их сумму.
 **/

// Код задания 3

const sum = (a, b) => a + b;
console.log(sum(2,3));


/**
 * Задание 4.
 Напиши функцию isEven(num) — возвращает true, если число чётное, иначе false.
 **/

// Код задания 4

function isEven(num) {
   if (num % 2 === 0) return true;
   return false;
}
console.log(isEven(1));
console.log(isEven(2));

/**
 * Задание 5.
 Напиши функцию formatName(firstName, lastName) возвращает строку вида:
 "Иванов И."
 Важно сокращать имя до 1 символа !
 **/

// Код задания 5

function formatName(firstName, lastName) {
   return `${lastName} ${firstName[0]}.`
}
console.log(formatName("Иван","Иванов"))

/**
 * Задание 6.
 Напиши функцию translateStatus(code), которая возвращает:
 'success' → 'Успешно'
 'error' → 'Ошибка'
 'pending' → 'В ожидании'
 Если нет соответствия — 'Неизвестно'.
 **/

// Код задания 6

function translateStatus(code) {
   if (code === 'success') return 'Успешно';
   if (code === 'error') return 'Ошибка';
   if (code === 'pending') return 'В ожидании';
   return 'Неизвестно';
}
console.log(translateStatus("success"))
console.log(translateStatus("asdasdasds"))

/**
 * Задание 7.
 Функция canLogin(user) возвращает true, если user.isActive === true и user.role === 'admin'.
 **/
// Код задания 7
const canLogin = (user) => user.isActive === true && user.role === 'admin';
let user = {isActive : true, role : 'admin'}
console.log(canLogin(user))

/**
 * Задание 8.
 Создай функцию, которая принимает любое количество аргументов и выводит их в консоль.
 Используй стрелочную функцию, но помни, что она не имеет объекта `arguments`.
 const showArgs = () => {
    console.log(arguments); // Ошибка: `arguments` не существует в стрелочной функции
 };
    showArgs(1, 2, 3);
 **/

// Код задания 8

const showArgs = (...args) => {
   console.log(args);
};
showArgs(1, 2, 3);