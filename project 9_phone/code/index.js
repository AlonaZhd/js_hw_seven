// Реалізуйте програму перевірки телефону
// * Використовуючи JS Створіть поле для введення телефону та кнопку збереження
// * Користувач повинен ввести номер телефону у форматі 000-000-00-00
// * Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер правильний зробіть зелене тіло
// використовуючи document.location переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg 
// якщо буде помилка, відобразіть її в діві до input.


const input = document.createElement('input');
input.type = 'tel';
input.placeholder = '000-000-00-00';

const pattern = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

// маска для вводу номеру телефону у форматі 000-000-00-00
/*
input.addEventListener('input', function (e) {
  const value = e.target.value;
  e.target.value = value
    .replace(/\D/g, '') // видаляємо все, що не є цифрами
    .slice(0, 10) // обмежуємо кількість символів до 10
    .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4'); // додаємо дефіси
});
*/

const btnSave = document.createElement('input');
btnSave.type = 'button';
btnSave.value = 'Зберегти';


btnSave.onclick = function() {
    if (pattern.test(input.value)) {
        input.style.backgroundColor = `rgb(94 227 94 / 47%)`;
        document.location.assign('https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg');
    }
    else {
        const error = alert('Телефон введено невірно!');
        input.style.backgroundColor = `rgb(225 78 78 / 47%)`;
    }
}

document.body.append(input);
document.body.append(btnSave);