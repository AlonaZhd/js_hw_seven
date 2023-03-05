/*
1. 
Прив'яжіть усім інпутам наступну подію - втрата фокусу кожен інпут виводить своє value в параграф з id="test"
focus blur input 
*/


const log = document.querySelector(".log");

const [...inputs] = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        //натиск у input
        input.className = ""
        input.classList.add("focus");
    })

    input.addEventListener("blur", () => {
        input.className = ""
        input.classList.add("blur")
        // log.innerHTML = input.value
        print(input.value)
    })

    input.addEventListener("input", () => {
        // log.innerHTML = input.value
    })
})

function print(message) {
    log.innerText += message + ",";
}