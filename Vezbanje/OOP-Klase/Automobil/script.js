import { Automombil } from "./modules/automobil.js";

let a1 = new Automombil(220, 0, 120);

console.log(a1.currentSpeed);

a1.ubrzaj(50);
console.log(a1.currentSpeed);

a1.ubrzaj(100);
console.log(a1.currentSpeed);

a1.uspori(100);
console.log(a1.currentSpeed);

a1.uspori(200);
console.log(a1.currentSpeed);
