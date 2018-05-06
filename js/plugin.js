// Strings_Exercise

let str = 'some test string';
let value;
let a = 20;
let b = 16;

// 1 task - первая и последняя буквы;
value = str[0];
value = str[str.length-1]
// 2 task - перая и последняя буквы в верхнем регистре
value = str[0].toUpperCase();
value = str[str.length-1].toUpperCase();
// 3 task - найти полжение слова string
value = str.indexOf('string');
// 4 task - найти второй пробел
value = str.indexOf(' ', 5);
// 5 task - получить строку с 5 символа длинной 4 буквы
value = str.substr(5, 4);
// 6 task - строка с 5 по 9 символ
value = str.substring(5, 9);
// 7 task получиь строку путем удаления последних 6 символов
value = str.slice(0, -6);
// 8 task - получить строку 2016
value = a + b.toString();

console. log(value);


// Number exersises
let res;

// 1 task - найт число pi
res = Math.PI;
// 2 task - макс и мин число. Вариант решения №1
let arr = [15, 11, 16, 12, 51, 13];
res = Math.max.apply(null, arr);
res = Math.min.apply(null, arr);
// 2 task - макс и мин число. Вариант решения №2
res = Math.min(15, 11, 16, 12, 51, 13);
res = Math.max(15, 11, 16, 12, 51, 13);
// 3 task (a) - найти рандомное число округленое до 2 цифр после запятой
res = Math.random().toFixed(2);
// 3 task (b) - случайное целое число от 0 до Х
let x = 10;
res = Math.floor(Math.random()*x);
// 4 task - сложить числа, чтоб в результате было 1.3
let y = 0.6;
let z = 0.7;
res = (y + z).toFixed(1);
// 5 task- сделать строку числом
res = parseFloat('100$');

console. log(res);

// Objects exercises
// 1 task - создать объект; 3 task - добавить поле details с объектом
let assort = {
    product: 'iphone',
    details: {
        model: 'nmol',
        color: 'red'
    }
};
// 2 task - добавить поля price, currecy
assort.price = 1000;
assort.curency = 'dollar';

console. log(assort);