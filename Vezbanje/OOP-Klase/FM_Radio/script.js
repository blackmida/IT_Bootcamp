import { FMRadio } from "./modules/fmradio.js";

let fm1 = new FMRadio('Jat', 90.5, 15);
let fm2 = new FMRadio('Play', 104.5, 12);
let fm3 = new FMRadio('TDI', 88.8, 19);
let fm4 = new FMRadio('City', 99.9, 8);

let stanice = [fm1, fm2, fm3, fm4];

let srednjaFrekvencija = stanice => {
    let suma = 0;
    stanice.forEach(el=>{
        suma+=el.frekvencija;
    });
    let arsr = suma/stanice.length;
    return arsr;
};

let najbliziMaks = stanice => {
    let maksS;
    let razlika = Infinity;
    stanice.forEach(el=>{
        if(108 - el.frekvencija < razlika){
            razlika = 108 - el.frekvencija;
            maksS = el;
        };
    });
    return maksS;
};

console.log(`Srednja vrednost svih stanica je ${srednjaFrekvencija(stanice)}`);
console.log(`Stanica najbliza maksimumu je:`);
najbliziMaks(stanice).stampaj();
