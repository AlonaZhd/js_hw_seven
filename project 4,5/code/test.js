// перебор масиву за допомогою циклів з виводом кожного елементу
console.log('за допомогою циклів');

let numbers = [1, -10, 15, 20, -5, 8, 14];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


// метод forEach з виводом кожного елементу або номеру ітерації
// перебирає весь масив і викликає функцію стільки раз скільки елементів в масиві
console.log('метод forEach');

numbers.forEach(function(item, i){
    console.log(i);
})

// метод filter вибирає ті елементи які підпадають під задані потреби
console.log('метод filter');

let neg = numbers.filter(function(item){
    return item < 0;
})

console.log(neg);

// метод map переработка елементов массива
console.log('метод map');

let data = ['1', '-10', '15', '20', '-5', '8', '14'];

let numbers2 = data.map(function(item){
    return parseInt(item);
});

console.log(numbers2);

// метод every якщо всі елементи відповідають критерію буде true
// на пустому масиві повертає true
console.log('метод every');

let numbers3 = [1, -10, 15, 20, 5, 8, 14];
let allPos = numbers3.every(function(item){
    return item >= 0;
});

console.log(allPos);

// метод some якщо хоч один елемент відповідає критерію буде true
// на пустому масиві повертає false
console.log('метод some');

let numbers4 = [1, -10, 15, 20, 5, 8, 14];
let hasNeg = numbers4.some(function(item){
    return item < 0;
});

console.log(hasNeg);

// метод reduse проводить акумуляцію елементів масива, 
//дивиться не тільки на елемент, а і на те що було пораховано до
console.log('метод reduse');

let numbers5 = [1, -10, 15, 20, 5, 8, 14];
let sum = numbers5.reduce(function(total, item){
    console.log(total);
    console.log(item);
    return total + item;
}, 0);

// важливо прописувати тут 0: }, 0) для того щоб першим значенням total було саме 0
// якщо не прописати, то в перше значення total попадаэ перший елемент з масиву, 
// тоді формула працює не корректно

console.log(sum);