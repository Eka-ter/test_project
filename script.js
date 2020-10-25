'use strict'
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// console.log (second);

// let person = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };
// console.log(person['name']);

// let arr = ['plum.png','orange.png','apple.bmp'];
// console.log(arr[0]);

// alert('Hello World!');
// let answer = confirm('Are you here?');
// console.log(answer);

// let answer = +prompt('Есть 18?', "Yes");
// console.log(typeof(answer));

// console.log('arr'+'-object');

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

let money = prompt("Ваш бюджет на месяц?", ""),
 time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);