
/**
 * Задание 1.
 Создайте объект person с полями firstName, lastName и age. Выведите полное имя в консоль.
 **/

// Код задания 1

const person = {
    firstName: "Иван",
    lastName: "Иванов",
    age: 25
};
console.log(person.firstName, person.lastName);

/**
 * Задание 2.
 Добавьте в объект person новое свойство city со значением "Moscow".
 **/

// Код задания 2
person.city = "Moscow";

/**
 * Задание 3.
 Удалите свойство age из объекта person.
 **/

// Код задания 3

delete person.age;

/**
 * Задание 4.
 Используйте цикл for...in, чтобы вывести в консоль все ключи и значения объекта person.
 **/

// Код задания 4

for (let key in person) 
    console.log(`${key}: ${person[key]}`);

/**
 * Задание 5.
 Напишите функцию, которая принимает объект и возвращает массив всех его ключей.
 **/

// Код задания 5

const get_keys = (obj) => Object.keys(obj);
console.log(get_keys(person));

/**
 * Задание 6.
 Напишите функцию, которая принимает объект и возвращает массив всех значений.
 **/

// Код задания 6
const get_values = (obj) => Object.values(obj);
console.log(get_values(person));

/**
 * Задание 7.
 Создайте объект с методом greet(), который выводит в консоль приветствие с использованием значения свойства name.
 **/

// Код задания 7

const user = {
    name: "Алиса",
    greet() {
        console.log("Привет, " + this.name);
    }
};
user.greet();

