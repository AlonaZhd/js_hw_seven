// 1.

document.write("1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на Украинском языке");
document.write("<br/> <br/>");

let number;
let week;

function ask() {
    number = prompt("Введіть число від 1 до 7:");
    week = ['понеділок','вівторок','середа','четвер',"п'ятниця",'субота','неділя'];
    document.write(week [number-1]);
}

ask()


// 2. 

document.write("<br/> <br/>");
document.write("2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'VarTextHello'.");
document.write("<br/> <br/>");


function changefirst(str) {
  	return str[0].toUpperCase() + str.substr(1);
}
    
let str = 'var_text_hello';
let res = [];
    
let newArr = str.split('_');
    
for (let i = 0; i < newArr.length; i++) {
  let newStr = changefirst(newArr[i]);
  res.push(newStr);
}

let final = res.join('');

document.write(final);



// 3. 

document.write("<br/> <br/>");
document.write("3. Создайте функцию которая будет заполнять массив 10-ю иксами с помощью цикла.");
document.write("<br/> <br/>");


function creatArray() {
  let array = [];
  
  for(let i = 1; i <= 10; i++){
    array.push('X');
  }
  document.write(array)
};

creatArray()


// 4. 

document.write("<br/> <br/>");
document.write(`4. Создайте маасив на 50 элементов и заполните каждый элемент его номером, 
не используя циклы выведите каждый нечетный элемент в параграфе, а четный в диве.`);
document.write("<br/> <br/>");

let newArray = [];
for(let i = 1; i <= 50; i++){
  newArray.push(i);
}

let result = newArray.map(function(elem) {
	if (elem % 2 == 0) {
		return `<font color="blue"> ${elem} </font>`;
	} else {
		return `<font color="red"> ${elem} </font>`;
	}
})

document.write(result.join(','));



// 5. 

document.write("<br/> <br/>");
document.write(`5. Если переменная a больше нуля - то в ggg запишем функцию, 
которая выводит один !, иначе запишем функцию, которая выводит два !`);
document.write("<br/> <br/>");

let a = prompt('Введіть будь-яке число', 3);
let ggg;

if (a > 0) {
  ggg = (function(){
    return `!`;
  }());
} else {
  ggg = (function(){
    return `!!`;
  }());
}

document.write(ggg);

/*
// присвоение переменной значения функции
var someVar = (function(){
  return `!`;
}());
*/


// 6. 

document.write("<br/> <br/>");
document.write(`6. Используя CallBack function создайте калькулятор 
  который будет от пользователя принимать 2 числа и знак арефметической операции. 
  При вводе не числа или при делении на 0 выводить ошибку.`);
document.write("<br/> <br/>");

document.write('зроблено на уроці');

// 7. 

document.write("<br/> <br/>");
document.write(`7. Функция ggg принимает 2 параметра: анонимную функцию, 
  которая возвращает 3 и анонимную функцию, которая возвращает 4. 
  Верните результатом функции ggg сумму 3 и 4.`);
document.write("<br/> <br/>");

function gggg(a, b){
  return a + b;
}

let f1 = (function(){
  return 3;
}());

let f2 = (function(){
  return 4;
}());

document.write(gggg(f1, f2));

// 8. 

document.write("<br/> <br/>");
document.write(`8. Сделайте функцию, которая считает и выводит количество своих вызовов.`);
document.write("<br/> <br/>");

// подсмотренно в учебнике
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

document.write(`${counter()} </br>`); // 0
document.write(`${counter()} </br>`); // 1
document.write(`${counter()} </br>`); // 2
document.write(`${counter()} </br>`);
document.write(`${counter()} </br>`);
document.write(`${counter()} </br>`);
document.write(`${counter()} </br>`);
document.write(`${counter()} </br>`);
document.write(`${counter()} </br>`);
document.write(`${counter()} </br>`);
