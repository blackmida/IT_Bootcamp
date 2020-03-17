import { Datum } from "./modules/datum.js";
import { Radnik } from "./modules/radnik.js";

let d1 = new Datum(10, 10, 1995);
let d2 = new Datum(5, 10, 1996);

let ranijiDatumi = (d1, d2) => {
    if (d1 == d2) {
        console.log('Datumi su isti.');
    }
    else {
        if (d1.godina > d2.godina) {
            return d2;
        }
        else if (d1.godina < d2.godina) {
            return d1;
        }
        else {
            if (d1.mesec > d2.mesec) {
                return d2;
            }
            else if (d2.mesec > d1.mesec) {
                return d1;
            }
            else {
                if (d1.dan > d2.dan) {
                    return d2;
                }
                else {
                    return d1;
                }
            }
        }
    }
}
ranijiDatumi(d1, d2).ispisi();

//KREIRANJE RADNIKA

let r1 = new Radnik('Miki', 40000);
let r2 = new Radnik('Dusan', 70000);
let r3 = new Radnik('Vlajko', 50000);

let radnici = [r1, r2, r3];

let maksPlata = radnici =>{
    let maks = radnici[0].plata;
    radnici.forEach(el=>{
        if(el.plata>maks){
            maks = el.plata; 
        }
    })
    return maks;
}

console.log('Najveca plata je:');
console.log(maksPlata(radnici));


// ispisuje sve osobe sa maksimalnom platom
let maksPlataOsoba = niz =>{
    let maks = maksPlata(niz);
    niz.forEach(el=>{
        if(el.plata==maks){
            console.log(`Radnik: ${el.ime}, ${el.plata}`);
        }
    })
};
maksPlataOsoba(radnici);