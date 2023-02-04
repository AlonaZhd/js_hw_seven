// - Написати функцію `createNewUser()`, яка буде створювати та повертати об'єкт `newUser`.
// - При виклику функція повинна запитати у імені, що викликає, і прізвище.
// - Використовуючи дані, введені користувачем, створити об'єкт `newUser` з властивостями `firstName` та `lastName`.
// - Додати в об'єкт `newUser` метод `getLogin()`, який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі (наприклад, `Ivan Kravchenko → ikravchenko`).
// - Створити користувача за допомогою функції createNewUser(). Викликати у користувача функцію `getLogin()`. Вивести у консоль результат виконання функції.

// - Візьміть виконане домашнє завдання 1 (створена вами функція `createNewUser()`) та доповніть її наступним функціоналом:
// 1. При виклику функція повинна запитати в дату народження (текст у форматі `dd.mm.yyyy`) і зберегти її в полі `birthday`.
// 2. Створити метод `getAge()` який повертатиме скільки користувачеві років.
// 3. Створити метод `getPassword()`, який повертатиме першу літеру імені користувача у верхньому регістрі, поєднану з прізвищем (у нижньому регістрі) та роком народження. (Наприклад, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
// - Вивести в консоль результат роботи функції `createNewUser()`, а також функцій `getAge()` та `getPassword()` створеного об'єкта.

/*
class GreatNewUser {
    constructor (name, surname, birthday) {
        this.firstName = name;
        this.lastName = surname;
        this.birthday = birthday;
    }
    getLogin() {
        return (this.firstName[0] + this.lastName).toLowerCase();
    }
    getAge() {
        return new Date().getFullYear() - this.birthday.substr(-4);
    }
    getPassword() {
        return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.substr(-4);
    }
}

const newUser = new GreatNewUser('Ivan', 'Kravchenko', '15.12.1987');
console.log(newUser.getAge());
console.log(newUser.getPassword());



// - Написати функцію `filterBy()`, яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
// - Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].

function filterBy(array, type) {
    return array.filter((item) => typeof item != type)
}

let array = ['hello', 'world', 23, '23', null];
console.log(filterBy(array, 'string'));

*/
