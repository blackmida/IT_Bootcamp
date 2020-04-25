import { Autobus } from "./modules/autobus.js";

let a1 = new Autobus('NI185UW', 50);
let a2 = new Autobus('BG121NM', 60);
let a3 = new Autobus('BG999OK', 55);
let a4 = new Autobus('PO121VC', 62);
let a5 = new Autobus('SU846NM', 60);

let autobusi = [a1, a2, a3, a4, a5];

let ukupnoSedista = autobusi => {
    let ukupno = 0;
    autobusi.forEach(el => {
        ukupno+=el.sedista;
    });
    return ukupno;
};

let maksSedista = autobusi => {
    let maxSed = -Infinity;
    let maxBus;
    autobusi.forEach(el=>{
        if(el.sedista>maxSed){
            maxSed = el.sedista;
            maxBus = el;
        };
    });
    return maxBus;
};

console.log(`Svi autobusi imaju ukupno ${ukupnoSedista(autobusi)} sedista.`);
console.log(`Autobus sa najvise sedista je: `);
maksSedista(autobusi).ispis();