import { Radnik } from "./modules/radnik.js";

let r1 = new Radnik('Marko', 25000);
let r2 = new Radnik('Mida', 45000);
let r3 = new Radnik('Boki', 35000);
let r4 = new Radnik('Janko', 45000);
let r5 = new Radnik('Sasa', 15000);

let radnici = [r1, r2, r3, r4, r5];

let maksPlata = radnici =>{
    let max = -Infinity;
    radnici.forEach(el => {
        if(el.plata > max){
            max=el.plata;
        }
    });
    return max;
}

let maksPlataOsoba = radnici => {
    let maxPlata = maksPlata(radnici);
    radnici.forEach(el => {
        if(el.plata==maxPlata){
            el.ispisi();
        };
    });
}

console.log(`Maksimalna plata je ${maksPlata(radnici)}`);
maksPlataOsoba(radnici);
