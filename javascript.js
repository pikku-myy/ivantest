'use strict'
let money,time;
function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == null || money == "") {
        money = +prompt('Ваш бюджет на месяц?');
    }
};
start();

let appData = {
    budget: money, 
    timeData: time,
    income: [],
    savings: true,
    expenses: {},
    optionalExpenses: {},
};

function chooseExpenses(){
    for(let i=0;i<2;i++){
    
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b = +prompt('Во сколько это обойдется', '');
        
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "") {
            appData.expenses[a] = b;
            console.log('Done');
        }   else {
            i = i-1;
        }
    };
};
chooseExpenses();
function everyDayBudget (){
    appData.budgetPerDay = (appData.budget/30).toFixed(1);
console.log('Бюджет на один день составляет: ' + appData.budgetPerDay);
};
everyDayBudget();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = (save/100/12*percent).toFixed(2);
        console.log('Доход в месяц с вашего депозита составляет: ' + appData.monthIncome);
    }
}
checkSavings();

function nishebrodDetect() {
    if(nishebrodDetect <= 2000){
        console.log('Тебе на проезд в трамвае до моста, чтобы сброситься с него, подать?');
    }   else if(nishebrodDetect > 2000 && nishebrodDetect <= 5000){
        console.log('может, тебе джинсы купить?');
    }   else if(nishebrodDetect > 5000){
        console.log('денег нет, но вы держитесь. Держитесь, говорю!');
}
};
nishebrodDetect();

function chooseOptExpenses() {
    for (let i=0; i<3; i++){
        let expQuestion = prompt('Статья необязательных расходов?');
        let numQuestion = i;
        if( (typeof(expQuestion)) === 'string' && (typeof(expQuestion)) != null && expQuestion != ""){
        appData.optionalExpenses[numQuestion] = expQuestion;
        }
    }
}
chooseOptExpenses();
console.log(appData);