// 1.
document.write("<p>1. Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом. :</p>");

const arrayLetter = ['a', 'b', 'c',];
const arrayNumber = [1, 2, 3];

const res1 = arrayLetter.concat(arrayNumber);
document.write(res1);
console.log(res1);

// 2.
document.write("<hr/>");
document.write("<p>2. Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3. :</p>");

const res2 = arrayLetter.concat(1, 2, 3);
document.write(res2);
console.log(res2);

// 3.
document.write("<hr/>");
document.write("<p>3. Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].:</p>");

arrayNumber.reverse();
document.write(arrayNumber);
console.log(arrayNumber);
arrayNumber.reverse();

// 4.
document.write("<hr/>");
document.write("<p>4. Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6. :</p>");

const arrayNumber2 = [1, 2, 3];
arrayNumber2.push(4, 5, 6,);
document.write(arrayNumber2);
console.log(arrayNumber2);

// 5.
document.write("<hr/>");
document.write("<p>5. Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6. :</p>");

const arrayNumber3 = [1, 2, 3];
arrayNumber3.unshift(4, 5, 6,);
document.write(arrayNumber3);
console.log(arrayNumber3);

// 6.
document.write("<hr/>");
document.write("<p>6. Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран. :</p>");

const arrayData = ['js', 'css', 'jq',];
document.write(arrayData[0]);
console.log(arrayData[0]);

// 7.
document.write("<hr/>");
document.write("<p>7. Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3]. :</p>");

const arrayNumber4 = [1, 2, 3, 4, 5,];
let temp = arrayNumber4.slice(0, 3);
    document.write(temp);
    console.log(temp);

// 8.
document.write("<hr/>");
document.write("<p>8. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5]. :</p>");

const arrayNumber5 = [1, 2, 3, 4, 5,];
let res3 = arrayNumber5.splice(1, 2);
document.write("Удалены: " + res3);
document.write("<p>Остались: " + arrayNumber5);
console.log("Удалены: " + res3);
console.log("Остались: " + arrayNumber5);

// 9.
document.write("<hr/>");
document.write("<p>9. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5]. :</p>");

const arrayNumber6 = [1, 2, 3, 4, 5,];
arrayNumber6.splice(2, 0, 10,);
document.write(arrayNumber6);
console.log(arrayNumber6);

// 10.
document.write("<hr/>");
document.write("<p>10. Дан масив [3, 4, 1, 2, 7]. Відсортуйте його. :</p>");

const arrayData2 = [3, 4, 1, 2, 7];
arrayData2.sort();
document.write(arrayData2);
console.log(arrayData2);

// 11.
document.write("<hr/>");
document.write("<p>11. Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'. :</p>");

const arrayHello = ['Привіт, ', 'світ', "!",];
let res4 = arrayHello.join(" ")
document.write(res4);
console.log(res4);

// 12.
document.write("<hr/>");
document.write("<p>12. Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, ' (тобто замість слова 'Привіт, ' буде 'Поки, '). :</p>");

const arrayHello2 = ['Привіт, ', 'світ', "!",];
arrayHello2[0] = 'До побачення, ';
let res5 = arrayHello2.join(" ")
document.write(res5);
console.log(res5);


// 13.
document.write("<hr/>");
document.write("<p>13. Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами. :</p>");


const newArray1= new Array(1,2,3,4,5)
document.write(newArray1);
console.log(newArray1);
document.write("<br/> <br/>");

const newArray2= [1,2,3,4,5]
document.write(newArray2);
console.log(newArray2);
document.write("<br/> <br/>");

const newArray3= [1]
newArray3.push(2);
newArray3.push(3);
newArray3.push(4);
newArray3.push(5);
document.write(newArray3);
console.log(newArray3);

// 14.
document.write("<hr/>");
document.write(`<p>
Дан багатовимірний масив arr:</p>
        <pre>
            <code>
                var arr = {
                    'ru':['блакитний', 'червоний', 'зелений'],
                    'en':['blue', 'red', 'green'],
                };
            </code>
        </pre>
        <p>Виведіть за його допомогою слово 'блакитний' 'blue'.</p>
        `);


const arrayData3 = {
    'ru':['блакитний', 'червоний', 'зелений'],
    'en':['blue', 'red', 'green'],
};
document.write(arrayData3.ru[0] + ' ' + arrayData3.en[0]);
console.log(arrayData3.ru[0] + ' ' + arrayData3.en[0]);

// 15.
document.write("<hr/>");
document.write("<p>15. Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'. :</p>");

const arrayData4 = ['a', 'b', 'c', 'd'];
document.write(arrayData4[0] + '+' + arrayData4[1] + ', ' + arrayData4[2] + '+' + arrayData4[3]);
console.log(arrayData4[0] + '+' + arrayData4[1] + ', ' + arrayData4[2] + '+' + arrayData4[3]);

// 16.
document.write("<hr/>");
document.write("<p>16. Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.</p>");

const arrayLength = parseInt(prompt('Яка кількість елементів масиву?', '6'));
const arrayFromUser = new Array(arrayLength);

for (let i = 0; i < arrayLength; i++) {
    arrayFromUser[i-0] = i;
};
document.write(arrayFromUser);
console.log(arrayFromUser);
/*
// 17.
document.write("<hr/>");
document.write("<p>17. Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.</p>");

const arrayNumberUser = [1, 2, 3, 4, 5, 6,];
if (arrayNumberUser(i) / 2 == 0) {
	console.log('Парні');
} else {
	console.log('Условие не выполнено :(');
}

*/
// 18.
document.write("<hr/>");
document.write(`
<p>18. Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою.</p>
<pre>
    <code>
     var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];
     document.write(str1); // "Капуста, Ріпа, Редиска, Морквина"
    </code>
</pre>
`);

const vegetables = [
    'Капуста', 
    'Ріпа', 
    'Редиска', 
    'Морковка',
];
let res6 = vegetables.join(", ");
document.write(res6);
console.log(res6);