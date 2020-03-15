import { Osoba } from "./klase/osoba.js";
import { Zaposleni } from "./klase/zaposleni.js";
import { Sportista } from "./klase/sportista.js";
import { Kosarkas } from "./klase/kosarkas.js";


let z1 = new Zaposleni("Marko", "Markovic", 1992, 37000, "komercijalista");
z1.ispisi();

let z2 = new Zaposleni("Miki", "Markovic", 1995, 40000, "ekonomista");
z2.ispisi();

let z3 = new Zaposleni("Janko", "Jankovic", 2000, 35000, "radnik");
z3.ispisi();

let zaposleni = [z1, z2, z3];

let prosekPlate = zaposleni => {
    let suma = 0;
    zaposleni.forEach(el => {
        suma += el.plata;
    });
    return suma / zaposleni.length;
}

console.log(`Prosecna plata je: ${prosekPlate(zaposleni)}`);

// OVO 
// console.log(z1.natprosecnaPlata(prosekPlate(zaposleni)));
// ILI
let avg = prosekPlate(zaposleni);
console.log(z1.natprosecnaPlata(avg));
console.log(z2.natprosecnaPlata(avg));

let s1 = new Sportista('Laza', 'Lazic', 1994, 'Beograd');
s1.ispisiSportistu();


let k1 = new Kosarkas('Boki', 'Bokic', 1996, 'Beograd', [14, 20, 16, 18]);
let k2 = new Kosarkas('Vlade', 'Vladic', 1995, 'Nis', [19, 2, 5, 18, 14]);
let k3 = new Kosarkas('Dusan', 'Vuksa', 1995, 'Pirot', [15, 29, 13]);

let kosarkasi = [k1, k2, k3];

let najviseUtakmica = niz =>{
    let max = niz[0].poeni.length;
    let osoba = niz[0];
    niz.forEach(el=>{
        let d = el.poeni.length;
        if(d>max){
            max = d;
            osoba = el;
        };
    });
    return osoba;
}

najviseUtakmica(kosarkasi).ispisiKosarkasa();

let najvisePoena = niz =>{
    let osoba = niz[0];
    let max = niz[0].poeni[0];
    niz.forEach(el=>{
        el.poeni.forEach(p =>{
            sum+=p;
        })
        if(sum>max){
            max = sum;
            osoba = el;
        }
    })
}