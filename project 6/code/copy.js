class Driver {
    constructor(fullName, record) {
        this.fullName = fullName;
        this.drivingRecord = record;
    }
    toString(){
        return `Driver: ${this.fullName}, experience is ${this.drivingRecord} years.`;
    }
}

class Engine {
    constructor(power, producer) {
        this.power = power; 
        this.producer = producer;
    }
    toString(){
        return `Engine: ${this.producer}, power is ${this.power} h.f..`;
    }
}

class Car {
    constructor(carBrand, carClass, weight, driver, motor) {
        this.carBrand = carBrand;
        this.carClass = carClass;
        this.weight = weight;
        this.driver = new Driver();
        this.motor = new Engine();
    }

    toString() {
    return `Car: ${this.carBrand}
Class: ${this.carClass}
Weight: ${this.weight}.`;
    }

    start() {
        return `${this.carBrand} Поїхали!`
    } 

    stop() {
        return `${this.carBrand} Зупиняємося!`
    }

    turnRight() {
        return `${this.carBrand} Поворот праворуч.`
    }

    turnLeft(){
        return `${this.carBrand} Поворот ліворуч.`
    }
}


const driver1 = new Driver('Іван Василенко', 20);
const driver2 = new Driver('Степан Шевченко', 25);
const driver3 = new Driver('Петро Симоненко', 28);

const motor1 = new Engine(185, 'Hundai');
const motor2 = new Engine(163, 'Toyota');
const motor3 = new Engine(240, 'Ford');

const car1 = new Car('Hundai Sonata', 'D: full-fledged middle class', 1960);
const car2 = new Car('Toyota Fortuner', 'J: SUV', 2620);
const car3 = new Car('Ford Mondeo', 'E: business class', 1826);

console.info(`${car1.toString()}

${motor1.toString()}

${driver1.toString()}`);


console.info(`${car2.toString()}

${motor2.toString()}

${driver2.toString()}`);


console.info(`${car3.toString()}

${motor3.toString()}

${driver3.toString()}`);

/*
console.info(car1.start().stop().turnRight().turnLeft());
console.info(car2.start().stop().turnRight().turnLeft());
console.info(car3.start().stop().turnRight().turnLeft());
*/

//========================================================

/*
class Person {
    constructor(firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
    toString(){
        return this.fullName;
    }
}

class Driver extends Person {
    constructor(firstName, lastName, experience) {
        super(firstName, lastName);
        this.experience = experience;
    }
    toString(){
        return `Driver: ${super.toString}, experience is ${this.experience} years.`;
    }
}

class Engine {
    constructor(power, producer) {
        this.power = power; 
        this.producer = producer;
    }
    toString(){
        return `Engine: ${this.producer}, power is ${this.power} h.f..`;
    }
}

class Car {
    constructor(carBrand, carClass, weight, driver, motor) {
        this.carBrand = carBrand;
        this.carClass = carClass;
        this.weight = weight;
        this.driver = driver;
        this.motor = motor;
    }

    toString() {
    return `Car: ${this.carBrand}
Class: ${this.carClass}
Weight: ${this.weight}.` + this.driver + this.motor;
    }
    start() {
        return `${this.carBrand} Поїхали!`
    } 

    stop() {
        return `${this.carBrand} Зупиняємося!`
    }

    turnRight() {
        return `${this.carBrand} Поворот праворуч.`
    }

    turnLeft(){
        return `${this.carBrand} Поворот ліворуч.`
    }
}

const driver1 = new Driver('Іван', 'Василенко', 20);
const driver2 = new Driver('Степан', 'Шевченко', 25);
const driver3 = new Driver('Петро', 'Симоненко', 28);

const motor1 = new Engine(185, 'Hundai');
const motor2 = new Engine(163, 'Toyota');
const motor3 = new Engine(240, 'Ford');

const car1 = new Car('Hundai Sonata', 'D: full-fledged middle class', 1960, driver1, motor1);
const car2 = new Car('Toyota Fortuner', 'J: SUV', 2620);
const car3 = new Car('Ford Mondeo', 'E: business class', 1826);

console.info(`${car1.toString()}

${motor1.toString()}

${driver1.toString()}`);



*/