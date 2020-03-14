let form = document.querySelector('#form')
let div = document.querySelector('#div'); // glavni div u koji se smestaju ostali mali divovi
let username = document.querySelector('#username');

let unosi = document.querySelectorAll('.unosi'); // niz koji ce kasnije da restartuje sve vrednosti

let rez = 0;
let o = ''; //prazan string za operacije

let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let puta = document.querySelector('#puta');
let podeljeno = document.querySelector('#podeljeno');
let patternUsername = /^[a-zA-Z]{5,15}$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let x = document.querySelector('#num1');
    let y = document.querySelector('#num2');

    if (patternUsername.test(username.value)) {
        x = parseInt(x.value);
        y = parseInt(y.value);
        if (plus.checked) {
            rez = x + y;
            o = '+';
        }
        else if (minus.checked) {
            rez = x - y;
            o = '-';
        }
        else if (puta.checked) {
            rez = x * y;
            o = '*';
        }
        else if (podeljeno.checked) {
            if (y != 0) {
                rez = x / y;
                o = '/';
            }
            else {
                alert('Ne moze se deliti nulom');
            }
        };

        let result = document.createElement('div'); // kreiranje diva u kom se upisuje rezultat

        result.innerHTML += `${x} ${o} ${y} = ${rez}<br>${username.value}`; // ispis u div

        //stilizacija diva
        result.style.borderBottom = `2px solid black`;
        result.style.width = `50%`;
        result.style.padding = `10px`;
        result.style.backgroundColor = `#ff8f87`;
        //kraj stiizacija

        div.appendChild(result);
    }
    else {
        alert('Uneli ste nevalidno korisnicko ime, ono mora sadrzati samo slova i imati izmedju 5 i 25 karaktera');
    };

    //Pozivanje niza sa unosima pocetnih vrednosti koji jasnije sve vraca na prazan string
    unosi.forEach(el =>{
        el.value = "";
    });
});

div.addEventListener('click', (e) => {
    if (e.target.tagName == 'DIV') {
        e.target.remove();
    };
});



/*
btn.addEventListener('click', (e) => {
    if (patternUsername.test(username.value)) {
        x = parseInt(x.value);
        y = parseInt(y.value);
        if (plus.checked) {
            rez = x + y;
            o = '+';
        }
        else if (minus.checked) {
            rez = x - y;
            o = '-';
        }
        else if (puta.checked) {podeljeno.checked) {
            if (y != 0) {
                rez = x / y;
                o = '/';
            }
            else {
                alert('Ne moze se deliti nulom');
            }
        };

        let result = document.createElement('div');
        result.innerHTML += `${x} ${o} ${y} = ${rez}<br>${username.value}`;
        div.appendChild(result);


        username.value = '';

    }
    else {
        alert('Uneli ste nevalidno korisnicko ime, ono mora sadrzati samo slova i imati izmedju 5 i 25 karaktera');
    }
    x.value = '';
    y.value = '';
});
            rez = x * y;
            o = '*';
        }
        else if (

div.addEventListener('click', (e) => {
    if (e.target.tagName == 'DIV') {
        e.target.remove();
    };
});

*/