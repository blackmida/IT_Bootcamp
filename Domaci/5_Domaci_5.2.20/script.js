// Pretvaranje litara u galone i obrnuto
const odnos = 3.785;
let galon = prompt("Unesite koliko imate galona kako bi izvrsili konverziju:");
console.log(`Uneta kolicina od ${galon} galona jednaka je kolicini od ${galon*odnos} litara`);

let litar = prompt("Unesite koliko imate litra kako bi izvrsili konverziju:");
console.log(`Uneta kolicina od ${litar} litara jednka je kolicini od ${litar/odnos} galona`);

// pretvaranje farenhajta u kelvine
let farenhajt = prompt("Unesite koliko je stepeni u farenhajtima:");
console.log(`Uneta temperatura od ${farenhajt} stepeni u farenhajtima iznosi ${(farenhajt-32)*5/9+273.15} kelvina`);

let kelvin = parseInt(prompt("Unesite koliko Kelvina treba konvertovati u Farenhajte:"));
console.log(`Uneti Kelvini nakon konverzije iznose ${(kelvin - 273.15)*9/5+32}`);