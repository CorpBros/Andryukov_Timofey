/**
 * Задание 1.
 Напиши метод `sum(arr)`, которая возвращает сумму всех чисел в массиве.
 **/

// Код задания 1
function sum(arr) {
  let sum = 0;
  for (let el of arr) sum += el;
  return sum;
}

const array1 = [1,2,3,4,5];
console.log(sum(array));

/** Задание 2.
Напиши метод `unique(arr)`, которая возвращает новый массив без повторяющихся значений.
 **/
// Код задания 2
function unique(arr) {
  let unique_arr = [];
  for (let el of arr) {
    if (!unique_arr.includes(el)) 
      unique_arr.push(el);
  }
  return unique_arr;
}

const array2 = [1,1,2,2,3,4,5];
console.log(unique(array2));

/**
  Задание 3.
` Напиши метод filterRange(arr, a, b)` — возвращает элементы из `arr` в диапазоне `[a, b]`.
 **/
// Код задания 3
const filterRange = (arr, a, b) => arr.slice(a, b + 1);
console.log(filterRange(array1,0,2));

/** Задание 4.
Напиши метод`sortDesc(arr)`, сортирующую числовой массив по убыванию без изменения оригинала.
 **/
// Код задания 4
const sortDesc = (arr) => new Array(...arr).sort().reverse();
const array3 = [1,5,2,3,6,8,2,1];
console.log(sortDesc(array3));
console.log(array3);

/** Задание 5.
` Напиши метод flatMapDemo(arr), которая для каждого элемента x из массива arr создаёт новый массив
    из двух элементов: [x, x * 2], а затем объединяет все эти массивы в один плоский массив.
 Используй flatMap
 **/

// Код задания 5

const flatMapDemo = (arr) => arr.flatMap((x) => [x, x * 2])
const array5 = [1,2,3,4,5];
console.log(flatMapDemo(array5));

/** Задание 6.
`Напиши метод groupBy(arr, keyFunc)` — группирует элементы массива по ключу,
 возвращая объект, где ключи — результат `keyFunc`.
 **/

// Код задания 6
function groupBy(arr, keyFunc) {
  let groups = {};
  for (let el of arr) {
    let key = keyFunc(el);
    if (!(key in groups)) groups[key] = [];
    groups[key].push(el);
  }
  return groups;
}
const array6 = [
  {name: "Alice", gender: "female"},
  {name: "Laura", gender: "female"},
  {name: "Alex", gender: "male"},
];
console.log(groupBy(array6,(x) => x.gender));

/** Задание 7.
`Напиши метод rotate(arr, n)` — возвращает новый массив, в котором элементы сдвинуты вправо на `n` позиций (цикл).
 Пример: `rotate([1,2,3,4,5], 2)` → `[4,5,1,2,3]`.
 **/
 // Код задания 7
function rotate(arr, n) {
  let new_arr = new Array(...arr);
  for (let i = 0; i < n; i ++) {
    let last_el = new_arr.pop();
    new_arr.unshift(last_el);
  }
  return new_arr;
}
console.log(rotate([1,2,3,4,5], 2));
