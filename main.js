// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let num_1 = 1;
let num_2 = 10;
let num_3 = -999;
let num_4 = 123;
let num_5 = 3.14;
let num_6 = 2.7;
let num_7 = 16;
let bool_1 = true;
let bool_2 = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num_1);
console.log(num_2);
console.log(num_3);
console.log(num_4);
console.log(num_5);
console.log(num_6);
console.log(num_7);
console.log(bool_1);
console.log(bool_2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Oleksiy'
let middleName = 'Slota'
let lastName = 'Ivanovich'

console.log(`${middleName} ${firstName} ${lastName}`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Імя: ')
let father_name = prompt('По-батькові: ')
let age = prompt('Вік: ')

console.log(`${name} ${father_name} ${age}`)