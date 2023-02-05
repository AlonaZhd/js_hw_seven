// Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
// При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло". Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинен бути створений і доданий на сторінку за допомогою Javascript
// При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола. При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл (10*10) випадкового кольору. При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.

// <input type="button" value="Намалювати коло">

// 'hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)'


document.querySelector("input").onclick = function() {
    const diameter = parseInt(prompt('Який бажаєте діаметр кола?', 50));
    let wrapper = document.querySelector('.wrapper');
        if (!wrapper) {
            wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");
            document.body.append(wrapper);
        } else {
            wrapper.innerHTML='';
        };

        wrapper.style.display = 'flex';
        wrapper.style.flexWrap = 'wrap';

        for (let i=0; i<100; i++){
            const round = document.createElement("div")
            round.classList.add("round");    
            round.style.height = diameter + 'px';
            round.style.width = diameter + 'px';
            round.style.borderRadius = '50%';
            round.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`; 
            wrapper.append(round);

            round.onclick=function(){
                round.remove();
            }
        }
    }
