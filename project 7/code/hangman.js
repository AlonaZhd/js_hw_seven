let words = [
    "життя",
    "дитинство",
    "любов",
    "щастя"
];

// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
let remainingLetters = word.length;

// Игровой цикл
while (remainingLetters > 0) {
    // Показываем состояние игры
    alert(answerArray.join(" "));
    // Запрашиваем вариант ответа
let guess = prompt("Вгадайте літеру або натисніть Скасувати, щоб вийти з гри");
    if (guess === null) {
    // Выходим из игрового цикла
    break;
    } else if (guess.length !== 1) {
        alert("Будь ласка, введіть одиночну літеру");
    } else {
    // Обновляем состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }
        }
    }
// Конец игрового цикла
}

// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Чудово! Слово, яке було загадано - " + word);


