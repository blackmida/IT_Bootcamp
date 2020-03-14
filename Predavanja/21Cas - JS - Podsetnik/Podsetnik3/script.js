let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let dodajDugme = document.querySelector('#dodaj');
let dodajInput = document.querySelector('#dodajInput');
let dodajPocetak = document.querySelector('#dodajPocetak');
let dodajKraj = document.querySelector('#dodajKraj');

/*
liZadaci.forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.remove();
        console.log('Kliknuto na li');
        e.stopPropagation(); // zaustavlja parent evente
    });
});

ulZadaci.addEventListener('click', () =>{
    console.log('kliknuto na ul');
}); */

ulZadaci.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.remove();
    };
});

let dodavanjeItema = () => {
    if (dodajInput.value == '') {
        alert('Dodaj tekst')
    }
    else {
        let liNew = document.createElement('li');
        liNew.innerText = `${dodajInput.value}`;
        // ulZadaci.prepend(liNew);
        if (dodajPocetak.checked) {
            ulZadaci.prepend(liNew);
            dodajInput.value = '';
        }
        else {
            ulZadaci.append(liNew);
            dodajInput.value = '';
        };
    };
};

dodajDugme.addEventListener('click', () => {
    dodavanjeItema();
});

dodajInput.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        dodavanjeItema();
    }
})