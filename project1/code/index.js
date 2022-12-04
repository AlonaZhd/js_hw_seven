
var userName = prompt("Напишіть Ваше ім'я", "Ім'я"),
    userLastName = prompt("Напишіть Ваше Прізвище", "Прізвище"),
    userAge = prompt("Напишіть Ваш вік", "вік"),   
    a = parseInt(prompt("Напишіть будь-яке число")),
    b = parseInt(prompt("Напишіть будь-яке число")),
    c = parseInt(prompt("Напишіть будь-яке число")),
    rez = (a + b + c) / 3;

document.write(`
<header>
    <div class='block'> 
        <h1>Персональна картка</h1> 
        <div>Ім'я користувача: ${userName}</div> 
        <div>Прізвище користувача: ${userLastName}</div> 
        <div>Вік користувача: ${userAge}</div> 
        <div>Середнє арифметичне користувача = ${rez}</div>
    </div>
</header>
<main>
    <nav>nav 100*400</nav>
    <section>

    </section>
</main>
<footer>footer 800*200</footer>
`)