import {city} from "./uacity.js"

/*
Використовуючи бібліотеку bootstrap створіть форму у якій запитати у користувача данні. 
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - Визначити код оператора та підтягувати логотип оператора. 
Пошта 
Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅
Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані 
*/


const log = document.querySelector(".log");

const [...inputs] = document.querySelectorAll("input");
const user = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    city: ""
}

const validate = (p, v) => p.test(v);

inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        if(e.target.dataset.type === "name" && validate(/^[а-яіїєґ'-]{2,}$/gi, e.target.value)){
            user.name = e.target.value;
            e.target.classList.add("valid")
        }else if(e.target.dataset.type === "surname" && validate(/^[а-яіїєґ'-]{2,}$/gi, e.target.value)){
            user.surname = e.target.value;
            e.target.classList.add("valid")
        }else if(e.target.dataset.type === "phone" && validate(/^\+380\d{2} \d{3} \d{2} \d{2}$/gi, e.target.value)){
            user.phone = e.target.value;
            e.target.classList.add("valid")
        }else if(e.target.dataset.type === "email" && validate(/^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z.]+$/gi, e.target.value)){
            user.email = e.target.value;
            e.target.classList.add("valid")
        }else{
            e.target.className = ""
            e.target.classList.add("error")
        }

        log.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Surname: ${user.surname}</p>
        <p>Phone: ${user.phone}</p>
        <p>Email: ${user.email}</p>
        <p>City: ${user.city}</p>
        `
    })
})

city.forEach((c) => {
    const datalist = document.querySelector("datalist");
    const option = document.createElement("option");
    option.value = c.city;
    datalist.append(option)
})

const cityInput = document.getElementById("city");

cityInput.addEventListener("change", (e) => {
  const cityList = document.getElementById("city-uk");
  const cityOptions = cityList.options;
  const selectedCity = e.target.value;
  
  let valid = false;
  for (let i = 0; i < cityOptions.length; i++) {
    if (selectedCity === cityOptions[i].value) {
      valid = true;
      break;
    }
  }

  if (valid) {
    user.city = e.target.value;
    e.target.classList.add("valid");
  } else {
    e.target.classList.add("error");
    e.target.classList.remove("valid");
  }
});
