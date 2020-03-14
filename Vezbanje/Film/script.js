import { Film } from "./film.js";

let f1 = new Film('Titanik', 'James Cameron', 1997, [3, 1, 5, 7]);
let f2 = new Film('Ko to tamo peva', 'Slobodan Sijan', 1968, [2, 4, 7]);
let f3 = new Film('Harry Potter', 'Chris Columbus', 2001, [5, 7, 2, 6]);

let filmovi = [f1, f2, f3];

filmovi.forEach(el => {
    el.stampaj();
    console.log(`Prosek ocena ovog filma je: ${el.prosek()}`);
});

let vekFilmova = ((niz, odFilm, doFilm) => {
    niz.forEach(el => {
        if (el.godinaIzdanja >= odFilm && el.godinaIzdanja <= doFilm) {
            el.stampaj();
        };
    });
});
console.log(`Filmovi 21.veka su:`);
vekFilmova(filmovi, 2000, 2010);


console.log(`Prosecna ocena svih filmova je:`);

let prosecnaOcena = niz => {
    let sum = 0;
    let brojac = 0;
    niz.forEach(film => {
        film.ocene.forEach(o => {
            sum += o;
            brojac++;
        });
    });
    let prosek = sum / brojac;
    return prosek;
}
console.log(prosecnaOcena(filmovi));

//najbolje ocenjeni film of niza filmova

let najboljeOcenjeni = niz => {
    let naj = niz[0];
    niz.forEach(el => {
        if (el.prosek() > naj.prosek()) {
            naj = el;
        };
    });
    return naj;
};
console.log('Najbolje ocenjen film je:');
najboljeOcenjeni(filmovi).stampaj();


//vraca film najblizi proseku svih filmova

let osrednjiFIlm = niz => {
    let minRazlika = Infinity; // pocetna minimalna razlika
    let film = niz[0]; // definisanje filma koji je za pocetak najblizi
    let prosek = prosecnaOcena(niz); // prosecna ocena svih filmova
    niz.forEach(el => {
        let trenutni = Math.abs(el.prosek() - prosek); // ovo je trenuta razlika izmedju srednje vrednosti svih filmova i pojedinacnog
        if (trenutni < minRazlika) {
            minRazlika = trenutni; //ukoliko je trenutna razlika manja od pocetne, sada ona uzima vrednsot
            film = el; // u promenljivoj film se pamti film cija je razliak najmanja
        };
    });
    return film;
};
console.log(`Film koji ima najpriblizniji srednjoj oceni je:`);
osrednjiFIlm(filmovi).stampaj();


//nadji najbolje ocenjen i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = niz => {
    let najbolji = najboljeOcenjeni(niz);
    let min = Infinity;
    najbolji.ocene.forEach(el => {
        if (el < min) {
            min = el;
        };
    });
    console.log(`Najbolje ocenjeni film je '${najbolji.naslov}', a njegova najgora ocena je ${min}`);
};
najmanjaOcenaNajboljeg(filmovi);


//najmanja ocena od svih ocena svih filmova

let najmanjaOcena = niz => {
    let min = Infinity;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            if (o < min) {
                min = o;
            };
        });
    });
    return min;
};
console.log(`Najmanja ocena koju je neki film dobio je: ${najmanjaOcena(filmovi)}`);

//




// iznad ocene, prosledi se niz i ocena, a vracaju e filmovi koji su bolje ocenjeni

let iznadOcene = (niz, ocena) => {
    let filmoviIznad = [];
    niz.forEach(el => {
        if(el.prosek()>ocena){
            filmoviIznad.push(el);
        };
    });
    return filmoviIznad;
};
iznadOcene(filmovi, 4.2).forEach(el => {
    el.stampaj();
});