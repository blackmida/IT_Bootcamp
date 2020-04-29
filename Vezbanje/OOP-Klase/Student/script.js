import { Student } from "./modules/student.js";

let div = document.querySelector('#ispis');

let s1 = new Student('1010995730021', 'Miodrag', 'Mijajlovic', [6, 7.2, 9.9]);
let s2 = new Student('1009000730075', 'Vojislav', 'Mijajlovic', [8, 10, 7, 10]);
let s3 = new Student('0506992735012', 'Ana', 'Antic', [6, 9, 5]);
let s4 = new Student('1411999735087', 'Ivana', 'Ilic', [5, 10, 6]);
let s5 = new Student('2301992730066', 'Marko', 'Markovic', [5, 10, 6]);

let studenti = [s1, s2, s3, s4, s5];

//Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija vraća broj studenata sa tim imenom i prezimenom.
let imePrezime = (i, p, studenti) => {
    let broj;
    studenti.forEach((el, br) => {
        if (el.ime == i && el.prezime == p) {
            // console.log(`Student ${i} ${p} ima broj ${br + 1}`);
            broj = br + 1;
        };
    });
    return broj;
};
console.log(`Prosledjeni student ima broj ${imePrezime('Ana', 'Antic', studenti)}`);
// imePrezime('Ana', 'Antic', studenti);



//Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svihocena studenata.
let srednjaOcena = studenti => {
    let sum = 0;
    studenti.forEach(el => {
        sum += el.prosek();
    });
    // let prosek = sum / studenti.length;
    // console.log(`Prosecna ocena svih studenata je ${prosek}`);
    return sum / studenti.length; // mora da bude return zato sto se funkcija koristi u narednoj
};
console.log(`Prosecna ocena svih studenata je ${srednjaOcena(studenti)}`);
// srednjaOcena(studenti);

//Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata.
let osrednji = studenti => {
    let prosek = srednjaOcena(studenti);
    let razlika = Infinity;
    let student = studenti[0];
    studenti.forEach(el => {
        if (Math.abs(el.prosek() - prosek) <= razlika) {
            razlika = Math.abs(el.prosek() - prosek);
            student = el;
        };
    });
    // return student;
    console.log(`Student koji ima prosek najblizi srednjoj oceni svih studenata je:`);
    student.ispis();
};
// console.log(`Student sa najblizim prosekom ocena proseku svih studenata je:`);
// osrednji(studenti).ispis();
osrednji(studenti);


// Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = studenti => {
    let najbolji = studenti[0];
    let najProsek = studenti[0].prosek();
    studenti.forEach(el => {
        if (el.prosek() > najProsek) {
            najProsek = el.prosek();
            najbolji = el;
        };
    });
    let najmanjaOcena = najbolji.ocene[0];
    najbolji.ocene.forEach(o => {
        if (o < najmanjaOcena) {
            najmanjaOcena = o;
        }
    });
    return `<p>Najmanja ocena najboljeg studenta ${najbolji.ime}-a/e je ${najmanjaOcena}</p>`;
}

div.innerHTML += najmanjaOcenaNajboljeg(studenti);


// Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.
let najmanjaOcena = studenti => {
    let min = Infinity;
    let sveOcene = [];
    studenti.forEach(el=>{
        sveOcene = sveOcene.concat(el.ocene);
    });
    sveOcene.forEach(o => {
        if(o < min){
            min = o;
        };
    });
    return min;
};
console.log(`Najmanja ocena od svih ocena koje su svi studenti dobili je: ${najmanjaOcena(studenti)}`);


// Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali.
let najcescaOcena = studenti => {
    let sveOcene = [];
    studenti.forEach(el => {
        sveOcene = sveOcene.concat(el.ocene);
    });

    let najcesca = sveOcene[0]; // najcesce davana ocena je prva u nizu = pretpostavka
    let ponovljenaPuta = 0; // najcesca ocena se ponovila 0 puta = pretpostavka
    for (let i = 0; i < sveOcene.length; i++) {
        let brojac = 0; // brojac koji broji koliko puta se neka ocena pojavila - uvek se restartuje na nulu kad udje u novu iteraciju
        for (let j = i; j < sveOcene.length; j++) {
            if (sveOcene[i] == sveOcene[j]) {
                brojac++;
            };
        };
        if (brojac > ponovljenaPuta) {
            ponovljenaPuta = brojac;
            najcesca = sveOcene[i];
        };
    };
    return najcesca;
};
console.log(`Najcesca ocena je: ${najcescaOcena(studenti)}`);



// f-ja koja ispisuje sve studente koji su rodjeni prosledjene godine, a godinu rodjenja studenta vadi iz JMBG-a
let rodjeniGodine = (studenti, god) => {
    let niz = [];
    studenti.forEach(el => {
        let godiste = '1' + el.jmbg.substr(4, 3);
        if (godiste == god) {
            niz.push(el);
        };
    });
    niz.forEach(s => {
        div.innerHTML += `<p>Student ${s.ime} sa JMBG ${s.jmbg} je rodjen ${god}</p>`;
    });
};

rodjeniGodine(studenti, '1992')


//  ---------------------------------------
/*
let grades = [2, 3, 5, 2, 3, 6, 2, 2, 2, 3, 5, 7];
let najveci = grades[0];
let trenutniMaks = 0;
for (let i = 0; i < grades.length; i++) {
    let brojac = 0;
    for (let j = i; j < grades.length; j++) {
        if (grades[j] == grades[i]) {
            brojac++;
        }
    }
    if (brojac > trenutniMaks) {
        trenutniMaks = brojac;
        najveci = grades[i];
    };
};
console.log(`Najcesci broj je ${najveci} i pojavljuje se ${trenutniMaks} puta`);

let noviNizic = [];
// console.log(noviNizic);


studenti.forEach(el=>{
    noviNizic = noviNizic.concat(el.ocene);
});
console.log(noviNizic);
*/