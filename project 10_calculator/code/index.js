/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.


* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
*/


const calc = {
    operand1 : "",
    operand2 : "",
    sing : "",
    history : ""
}

document.querySelector(".keys").addEventListener("click", (e) => {
    if(validate(/\d/, e.target.value) && calc.sing ===""){
        calc.operand1 += e.target.value
        show(calc.operand1)
    }else if(validate(/[-+/*]/, e.target.value)) {
        calc.sing = e.target.value
    }else if(validate(/\d/, e.target.value) && calc.sing !=="" && calc.operand1 !== "") {
        calc.operand2 += e.target.value
        show(calc.operand2);
        document.getElementById("eq").disabled = false;   
    }
    console.log(calc)
})

const validate = (p, v) => p.test(v);
/* function validate (pattern, value) {
    return pattern.test()
} */

function show (info) {
    const display = document.querySelector(".display > input");
    display.value = info
}