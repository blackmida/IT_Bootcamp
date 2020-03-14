import { Auto } from "./modules/auto.js";
import Film from "./modules/film.js";
import { Pacijent } from "./modules/pacijent.js";
import { Knjiga } from "./modules/knjiga.js";

let auto1 = new Auto("Peugeot 208", "bele", false);
let auto2 = new Auto("Mazda CX-30", "crvene", true);

console.log(auto1, auto2);
auto2.sviraj();


let film1 = new Film('Film1', 'Reziser1', 1995, 9);
let film2 = new Film('Film2', 'Reziser2', 2020, 5);
let film3 = new Film('Film3', 'Reziser3', 2010, 7);

//KREIRAN NIZ FILMOVA
let filmovi = [film1, film2, film3];


// ispisuju se samo filmovi 21 veka
console.log(`FILMOVI 21 VEKA`);
filmovi.forEach(el => {
    if (el.godinaIzdanja > 2000) {
        console.log(el);
    }
})


// POZIV SET METODA ZA FILM1 I NA KRAJU ISPIS
film1.filmGodIzd = '1999';
film1.filmNaslov = 'Titanik';
film1.filmReziser = 'Neki burazer';
console.log(film1);



let pac1 = new Pacijent('Miki', '1.82', '125');
let pac2 = new Pacijent('Janko', '1.74', '65');
let pac3 = new Pacijent('Stanko', '1.90', '52');

pac1.stampaj();
console.log(pac1.bmi());
console.log(pac1.kritican());

console.log(pac1);
console.log(pac3.kritican());

let knjiga1 = new Knjiga('Lovac na zmajeve', 'Haled Hoseini', 2010, 650, 1500);
console.log(knjiga1);
knjiga1.stampaSve();
console.log(knjiga1.daLiJeDugacko());