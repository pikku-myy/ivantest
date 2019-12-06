'use strict'
let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    budget: money, 
    timeData: time,
    income: [],
    savings: false,
    expenses: {},
    optionalExpenses: {},
};
let a1 = prompt('Введите обязательную статью расходов в этом месяце');
let a2 = prompt('Во сколько это обойдется');
let a3 = prompt('Введите обязательную статью расходов в этом месяце');
let a4 = prompt('Во сколько это обойдется');
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
alert('Бюджет на один день составляет: ' + (appData.budget/30));
console.log(appData);