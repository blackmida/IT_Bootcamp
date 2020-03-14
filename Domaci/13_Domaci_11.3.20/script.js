import {Brojevi} from "./modules/brojevi.js";

let kombinacija1 = new Brojevi(15, 5);
//poziv svih metoda
console.log(kombinacija1.saberi());
console.log(kombinacija1.oduzmi());
console.log(kombinacija1.pomnozi());
console.log(kombinacija1.podeli());

// pozivanje set metode za oba broja
kombinacija1.prviBroj = 78;
kombinacija1.drugiBroj = 30;

console.log(kombinacija1.oduzmi());
console.log(kombinacija1.podeli());

// pozivanje set metode za prvi broj
kombinacija1.prviBroj = 112;
// pozivanje get metode za drugi broj
console.log(kombinacija1.prviBroj);

// setovanje drugog broja na 0
kombinacija1.drugiBroj = 0;
// poziv metode za deljenje kada je drugi broj 0 
console.log(kombinacija1.podeli());
