import { Plivac } from "./modules/plivac.js";

let div = document.querySelector('#ispis');

let p1 = new Plivac('Mida', 1995, 25.3);
let p2 = new Plivac('Voja', 2000, 35.9);
let p3 = new Plivac('Vlada', 1995, 28.3);
let p4 = new Plivac('Vuksa', 1995, 45);
let p5 = new Plivac('Boban', 1996, 42.1);
let p6 = new Plivac('Katarina', 1997, 29);
let p7 = new Plivac('Marija', 1996, 21.4);
let p8 = new Plivac('Bonca', 1996, 33.8);
let p9 = new Plivac('Saska', 1995, 31.1);
let p10 = new Plivac('Teodora', 1996, 36.1);
let p11 = new Plivac('Peca', 1968, 27.3);

let plivaci = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];


// Napraviti funkciju topTen koja kao rezultat vraća niz od 10 najboljih rezultata ove godine.
let topTen = plivaci => {
    plivaci.sort((a, b) => a.rezultat - b.rezultat);
    let topTenArray = [];
    for (let i = 0; i < 10; i++) {
        topTenArray.push(plivaci[i]);
    };
    return topTenArray;
};

console.log(topTen(plivaci));

// Napraviti funkciju norma kojoj se prosleđuje norma i niz plivača, a funkcija
// vraća niz onih plivača koji ispunjavaju ovu normu.

let norma = (plivaci, norma) => {
    let normaPlivac = plivaci.filter(function (plivac) {
        return plivac.rezultat < norma;
    });
    return normaPlivac;
};

console.log(norma(plivaci, 33));


// Napisati funkciju normaNajmladji koja treba da na ekranu ispiše sve podatke
//o najmlađem igraču koji zadovoljava normu koja je zadata prethodnom funkcijom.

let normaNajmladji = (plivaci, vreme) => {
    let plivaciSvi = norma(plivaci, vreme);
    plivaciSvi.sort((a,b) => b.godinaRodjenja - a.godinaRodjenja);
    // return plivaciSvi[0];
    div.innerHTML += `<p>${plivaciSvi[0].ispisi()}</p>`;
};

// console.log(normaNajmladji(plivaci, 36));
normaNajmladji(plivaci, 36);