import { Knjiga } from "./knjiga.js";
import { Pacijent } from "./pacijent.js";
import { Autobus } from "./autobus.js";
import { Film } from "./film.js";


let knjiga1 = new Knjiga("Lovac na zmajeve", "Haled Hoseini", 2010, 500, 250);
let knjiga2 = new Knjiga("Orlovi rano leto", "Branko Copic", 2006, 200, 8001);
let knjiga3 = new Knjiga("Ana Karenjina", "Lav Tolstoj", 1996, 1200, 8300);

let nizKnjiga = [knjiga1, knjiga2, knjiga3];

nizKnjiga.forEach(el => {
    el.stampaj();
});


console.log('Skupe i obimne knjige:');
nizKnjiga.forEach(el => {
    if (el.skupa() && el.obimna()) {
        el.stampaj();
    };
})

if (knjiga2.obimna()) {
    console.log('Knjiga je obinmna');
}
else {
    console.log('Knjiga nije obimna');
}

if (knjiga2.skupa()) {
    console.log('Knjiga je skupa');
}
else {
    console.log('Knjiga nije skupa.');
}

if (knjiga2.dugackoIme) {
    console.log('Autor ima dugacko ime.');
}
else {
    console.log('Autor nema dugacko ime');
}

let ukupnaCena = nizKnjiga => {
    let cenaUkupno = 0;
    nizKnjiga.forEach(el => {
        cenaUkupno += el.cena;
    });
    return cenaUkupno;
}
console.log(`Ukupna cena svih knjiga je ${ukupnaCena(nizKnjiga)}`);

let ukupnoStranica = nizKnjiga => {
    let stranicaUkupno = 0;
    nizKnjiga.forEach(el => {
        stranicaUkupno += el.brojStranica;
    });
    return stranicaUkupno;
}
console.log(`Ukupno ima stranica ${ukupnoStranica(nizKnjiga)}`);

let prosecnaCena = nizKnjiga => {
    let brojac = 0;
    nizKnjiga.forEach(el => {
        brojac++;
    })

    return ukupnaCena(nizKnjiga) / brojac;
}
console.log(`Prosecna cena svih knjiga je ${prosecnaCena(nizKnjiga)}`);

let prosecnaStranica = nizKnjiga => {
    let uc = ukupnaCena(nizKnjiga);
    let us = ukupnoStranica(nizKnjiga);
    return uc / us;
}

console.log(`Prosecna cena stranice je: ${prosecnaStranica(nizKnjiga)}`);


let p1 = new Pacijent('Miki', 1.82, 125);
let p2 = new Pacijent('Janko', 1.74, 65);
let p3 = new Pacijent('Stanko', 1.90, 52);

let pacijenti = [p1, p2, p3];


//Pacijent sa najmanjom tezinom.
let minPac = pacijenti[0];
let minTez = pacijenti[0].tezina;
pacijenti.forEach(el => {
    if (minTez > el.tezina) {
        minTez = el.tezina;
        minPac = el;
    }
});
minPac.stampaj();

let najmanjaTezina = niz => {
    let minPac = niz[0];
    let minTez = niz[0].tezina;
    niz.forEach((el, i) => {
        if (el.tezina < minTez) {
            minTez = el.tezina;
            minPac = niz[i];
        }
    })
    console.log(`Pacijent sa najmanjom tezinom je ${minPac.ime} i njegova tezina je ${minPac.tezina}`);
}

najmanjaTezina(pacijenti);


//pacijent sa najvecim BMI 

// maxBmi = -Infinity;
// maxPac = '';
// pacijenti.forEach((el, i) => {
//     if (el.bmi > maxBmi) {
//         maxBmi = el.bmi;
//         maxPac = el;
//     }
// });




//
//  AUTOBUSI
//

let a1 = new Autobus('NI-111AA', 64);
let a2 = new Autobus('NI-121SS', 32);
let a3 = new Autobus('NI-552BB', 60);


let autobusi = [a1, a2, a3];

let ispisAutobusa = autobusi => {
    autobusi.forEach(el => {
        el.stampaj();
    });
}

ispisAutobusa(autobusi);


let ukupnoSedista = autobusi => {
    let ukupno = 0;
    autobusi.forEach(el => {
        ukupno += el.brSed;
    });
    return ukupno;
}
console.log(`Svi autobusu imaju ukupno: ${ukupnoSedista(autobusi)}`);


let maksSedista = autobusi => {
    let max = -Infinity;
    let bus = autobusi[0];

    autobusi.forEach((el, i) => {
        if (el.brSed > max) {
            max = el.brSed;
            bus = autobusi[i];
        }
    });

    return bus.stampaj();
}

maksSedista(autobusi);

let ljudi = (br, autobusi) => {
    let uk = ukupnoSedista(autobusi);
    if (br <= uk) {
        return true;
    }
    else {
        return false;
    }
}

if (ljudi(250, autobusi)) {
    console.log(`Moguce je smestite ljude u autobusu`);
}
else {
    console.log(`Nije moguce smestiti ljude u autobus`);
}




// 
// FILMOVI
//



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

// najcesca cena - prosledjuje niz filmova, a vraca se najcesca ocena koju su dobijali
let oceneNiz = [3, 1, 5, 7, 2, 4, 7, 5, 7, 2, 6];
let najcescaOcena = oceneNiz => {
    let brPonovaljaja = 0;
    let maxPonavljaja = 0;
    let broj = oceneNiz[0];

    for (let i = 0; i < oceneNiz.length; i++) {
        for (let j = 0; j < oceneNiz.length; j++) {
            if (oceneNiz[i] == oceneNiz[j]) {
                brPonovaljaja++;
            };
        };
        if (brPonovaljaja > maxPonavljaja) {
            maxPonavljaja = brPonovaljaja;
            broj = oceneNiz[i];
        };
        brPonovaljaja = 0;
    };
    return broj;
}

console.log('');
console.log('Najcesca ocena je:');
console.log(najcescaOcena(oceneNiz));



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

// prosledi se niz i ocena,a vraca najnoviji film iznad te ocene
let iznadOceneNoviji = (niz, ocena) =>{
    let noviNizFilmova = iznadOcene(niz,ocena);
    let najnoviji = noviNizFilmova[0];
    let godina = -Infinity;
    noviNizFilmova.forEach(f => {
        if(f.godinaIzdanja > godina){
            godina = f.godinaIzdanja;
            najnoviji = f;
        };
    });

    return najnoviji;
}

console.log('');
console.log('Najnoviji film iznad ocene je:');
iznadOceneNoviji(filmovi, 4.2).stampaj();