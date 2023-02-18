// 2. Створіть програму секундомір.
// * Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
// * При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий 
// * Виведення лічильників у форматі ЧЧ:ММ:СС
// * Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції

let counter = 0, time, timerInterval, flag = false;

const get = id => document.getElementById(id);

getValue = (a) => {
    let res;
    (a<10)
    ? res = '0'+ a
    : res = a;
    return res
},

count = () => {
    counter++;
        get("mseconds").innerText = getValue(counter%60);
        get("seconds").innerText = getValue(Math.floor(counter/60)%60);
        get("minutes").innerText = getValue(Math.floor(counter/3600));
},

setTimerColor = (color) => {
    get('timer').classList.remove('red');
    get('timer').classList.remove('black');
    get('timer').classList.remove('green');
    get('timer').classList.remove('silver');
    get('timer').classList.add(color);
},

clearCounter = () => {
    counter=0;
    get("mseconds").innerText = '00';
    get("seconds").innerText = '00';
    get("minutes").innerText = '00';
},

get("start").onclick = () => {
    if(!flag){
        flag = true;
        setTimerColor('green');
        timerInterval = setInterval(count, 1000/60);  
    }
},

get("stop").onclick = () => {
    flag = false;
    setTimerColor('red');
    clearInterval(timerInterval);
},

get("reset").onclick = () => {
    flag = false;
    setTimerColor('silver');
    clearInterval(timerInterval);
    clearCounter();
};