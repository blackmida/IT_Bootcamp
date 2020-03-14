let x = 0;
let y = 0;
let rez = 0;
let o = '';

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
b1.addEventListener('click', () => {
    if (x == 0) {
        x = 1;
    }
    else {
        y = 1;
    }
});

b2.addEventListener('click', () => {
    if (X == 0) {
        x = 2;
    }
    else {
        y = 2;
    }
});

let s = document.getElementById('plus');
s.addEventListener('click', () => {
    o = '+';
});

let jednako = document.getElementById('jednako');
jednako.addEventListener('click', () => {
    switch (o) {
        case "+":
            rez = x + y;
            break;
        case "-":
            rez = x - y;
            break;
        case "*":
            rez = x * y;
            break;
        case "/":
            rez = x / y;
            break;
    };
    let paragraf = document.getElementById('rezultat');
    paragraf.innerText = rez;
});
