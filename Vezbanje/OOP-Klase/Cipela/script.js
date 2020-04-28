import { Cipela } from "./module/cipela.js";


let div = document.querySelector('#ispis');

let c1 = new Cipela('Oxford', 45, ['zalepi','usij']);
let c2 = new Cipela('Derby', 42, ['povecaj','prosiri']);

let radi = cip => {
    div.innerHTML += `<h3>${cip.naz}, ${cip.br}</h3>`;
    let niz = cip.niz;
    niz.forEach(el => {
        if(el == 'usij'){
            div.innerHTML += cip.usij();
        }
        else if(el == 'zalepi'){
            div.innerHTML += cip.zalepi();
        }
        else if(el == 'prosiri'){
            div.innerHTML += cip.prosiri();
        }
        else{
            div.innerHTML += `Nepoznata popravka`;
        }
    });
};

radi(c1);
radi(c2);