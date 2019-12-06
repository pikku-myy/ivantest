'use strict'
let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let exp = prompt('Введите обязательную статью расходов в этом месяце');
let price = +prompt('Во сколько это обойдется');
let appData = {
    бюджет: money, 
    timeData: time,
    income: [],
    savings: false,
    expenses: {exp: price},
    optionalExpenses: {},
};
alert('бюджет на один день составляет' + ': ' + (money-price)/30);
console.log(appData);