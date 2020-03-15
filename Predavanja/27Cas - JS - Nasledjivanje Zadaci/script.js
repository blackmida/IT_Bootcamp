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

let najviseUtakmica = niz => {
    let max = niz[0].poeni.length;
    let osoba = niz[0];
    niz.forEach(el => {
        let d = el.poeni.length;
        if (d > max) {
            max = d;
            osoba = el;
        };
    });
    return osoba;
}

najviseUtakmica(kosarkasi).ispisiKosarkasa();


//kosaraksa koji je postigao najvise poena na jednoj utakmici
let najvisePoena = kosarkasi =>{
    let osoba = kosarkasi[0];
    let max=0;
    kosarkasi.forEach(k=>{
        k.poeni.forEach(p=>{
            if(p>max){
                max=p;
                osoba = k;
            };
        });
    });
    return osoba;
}
console.log('Najvise poena u jednoj utakmici postigao je:');
najvisePoena(kosarkasi).ispisiKosarkasa();


//najvise prosecno poena, kosarkas koji je u proseku najvise postigao poena po utakmici

let najviseProsecnoPoena = niz => {
    let prosek = -Infinity;
    let osoba = niz[0];
    let suma = 0;
    niz.forEach(k=>{
        k.poeni.forEach(p => {
            suma+=p;
        })
        if(suma/k.poeni.length>prosek){
            prosek = suma/k.poeni.length;
            osoba = k;
        };
        suma = 0;
    })

    return osoba;
}
console.log('Kosarkas koji ima najveci prosek poena po utakmici je:');
najviseProsecnoPoena(kosarkasi).ispisiKosarkasa();