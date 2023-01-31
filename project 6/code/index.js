
// 1.
document.write(`1. Реалізуйте клас Worker (Працівник), який матиме такі властивості: 
name (ім'я), surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.`);
document.write("<br/> <br/>");

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
}

Worker.prototype.greatName = function () {
    return this.name + ' ' + this.surname;
}

Worker.prototype.getSalary = function () {
    return this.rate * this.days;
}

let salary = new Worker('Іван', 'Василенко', 1000, 22);
let salary2 = new Worker('Петро', 'Симоненко', 1200, 21);
let salary3 = new Worker('Тарас', 'Іваненко', 950, 22);
let salary4 = new Worker('Степан', 'Шевченко', 1100, 20);

document.write(`Зарплата працівника ${salary.greatName()}: ${salary.getSalary()} грн <br/>`);
document.write(`Зарплата працівника ${salary2.greatName()}: ${salary2.getSalary()} грн <br/>`);
document.write(`Зарплата працівника ${salary3.greatName()}: ${salary3.getSalary()} грн <br/>`);
document.write(`Зарплата працівника ${salary4.greatName()}: ${salary4.getSalary()} грн <br/>`);



// 2.
document.write("<br/>");
document.write("<hr/>");
document.write(`2.     Реалізуйте клас MyString, який матиме такі методи: 
метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, 
метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.`);
document.write("<br/> <br/>");

class MyString {
    constructor(str) {
        this.str = str;
    }
}

MyString.prototype.reverseStr = function (){
    return [...this.str].reverse().join("");
}

MyString.prototype.ucFirst = function () {
    return this.str[0].toUpperCase() + this.str.slice(1);
}

MyString.prototype.ucWords = function () {
    return this.str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
}

const string1 = new MyString("Hello world");

const string2 = new MyString("my world");

const string3 = new MyString("my wonderful world");

document.write(`${string1.reverseStr()}<br/><br/>`);

document.write(`${string2.ucFirst()}<br/><br/>`);

document.write(`${string3.ucWords()}<br/><br/>`);


// 3.
document.write("<br/>");
document.write("<hr/>");
document.write(`3.     Створіть клас Phone, який містить змінні number, model і weight.
Створіть три екземпляри цього класу.
Виведіть на консоль значення їх змінних.
Додати в клас Phone методи: receiveCall, має один параметр - ім'я. 
Виводить на консоль повідомлення "Телефонує {name}". 
Метод getNumber повертає номер телефону. 
Викликати ці методи кожного з об'єктів.
`);
document.write("<br/> <br/>");

class Phone {
    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
}

Phone.prototype.receiveCall = function(name) {
    console.log(`Телефонує ${name}`);
}

Phone.prototype.getNumber = function() {
    console.log(`${this.number} is calling...`);
}

const phone1 = new Phone('+380505656565', 'Redmi', 140);
const phone2 = new Phone('+48696925045', 'iPhone', 160);
const phone3 = new Phone('+380670945564', 'Samsung', 180);

console.log(phone1);
console.log(phone2);
console.log(phone3);

phone1.receiveCall('Іван Василенко');
phone2.receiveCall('Степан Шевченко');
phone3.receiveCall('Петро Симоненко');

phone1.getNumber();
phone2.getNumber();
phone3.getNumber();


/*
// 4.
document.write("<br/>");
document.write("<hr/>");
document.write(`4.     Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. 
Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: 
"Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), 
який виводить повну інформацію про автомобіль, її водія і двигуна.
`);
document.write("<br/> <br/>");

*/

// 5.
document.write("<br/>");
document.write("<hr/>");
document.write(`5.      Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. 
Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.

Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). 
Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
У циклі надсилайте їх на прийом до ветеринара.`);
document.write("<br/> <br/>");

class Animal {
    constructor (food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        console.log(`Така тварина спить ${this.location}...`);
    }

    eat() {
        console.log(`Eating ${this.food}...`);
    }

    sleep() {
        console.log(`Sleeping...`);
    }
}

class Dog extends Animal {
    constructor (food, location, breed) {
        super(food, location);
        this.breed = breed;
    }

    makeNoise() {
        console.log(`Порода: ${this.breed}.`);
    }

    eat() {
        console.log(`wow! food!`);
    }
}

class Cat extends Animal {
    constructor (food, location, family) {
        super(food, location);
        this.family = family;
    }

    makeNoise() {
        console.log(`Родина: ${this.family}.`);
    }

    eat() {
        console.log(`Where is my milk?`);
    }
}

class Horse extends Animal {
    constructor (food, location, kind) {
        super(food, location);
        this.kind = kind;
    }

    makeNoise() {
        console.log(`Різновид: ${this.kind}.`);
    }

    eat() {
        console.log(`om-nom-nom...`);
    }
}

//Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). 
//Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
//У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
//У циклі надсилайте їх на прийом до ветеринара.

class Veterinar {
    treatAnimal(animal) {
        console.log(`Food: ${animal.food}. Location: ${animal.location}.`)
    }
    main() {
        let animals = [];
        animals.push(new Dog('bone', 'Shevchenko Av.', 'dachshund'));
        animals.push(new Cat('milk', 'Batumskaya Str', 'Egyptian sphinx'));
        animals.push(new Horse('hay', 'Vorontsova Str', 'pony'));
        for (let animal of animals) {
        this.treatAnimal(animal);
        }
    }
}

let veterinar = new Veterinar();
veterinar.main();

let dog = new Dog('bone', 'Shevchenko Av.', 'dachshund');
dog.makeNoise();
dog.eat();

let cat = new Cat('milk', 'Batumskaya Str', 'Egyptian sphinx');
cat.makeNoise();
cat.eat();

let horse = new Horse('hay', 'Vorontsova Str', 'pony');
horse.makeNoise();
horse.eat();