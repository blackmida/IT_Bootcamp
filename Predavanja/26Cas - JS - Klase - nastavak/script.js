import { Knjiga } from "./knjiga.js";
import { Pacijent } from "./pacijent.js";
import { Autobus } from "./autobus.js";
import Film from "./film.js";


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



let f1 = new Film('Film1', 'Reziser1', 1995, [2, 5, 6, 8]);
let f2 = new Film('Film2', 'Reziser2', 2020, [4, 7, 9]);
let f3 = new Film('Film3', 'Reziser3', 2010, [1, 7, 3, 7, 9]);

let filmovi = [f1, f2, f3];

filmovi.forEach(el => {
    let ocene = el.fOcene;
})

filmovi.forEach(el => {
    console.log(el.prosecna());
})

let filmVek = (niz, odGod, doGod) => {
    niz.forEach(el => {
        if (el.fGodIzdanja >= odGod && el.fGodIzdanja <= doGod) {
            el.stampaj();
        };
    });
}
filmVek(filmovi, 2000, 3000);

let prosecnaOcena = (niz) => {
    let sumaOcena = 0;
    let brojOcena = 0;
    niz.forEach(film => {
        let ocene = film.fOcene;
        ocene.forEach(o => {
            sumaOcena += o;
            brojOcena++;
        });
    });

    let arsr = sumaOcena / brojOcena;
    return arsr;
};


console.log(prosecnaOcena(filmovi));