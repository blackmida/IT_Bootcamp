//esktrmna temperatura
let temp = parseInt(prompt("Unesite temperaturu za proveru:"));
if (temp < -15 || temp > 40) {
    console.log("Ekstremna temperatura");
}

// Prestupna godina
let vreme = new Date();
let godina = parseInt(vreme.getFullYear());

if (godina % 4 == 0 && godina % 100 != 0) {
    console.log(`${godina} je prestupna`);
}
else if (godina % 400 == 0) {
    console.log(`${godina} je prestupna`);
}
else {
    console.log(`${godina} nije prestupna`);
}

//radno vreme butika 09-20 i 10-18
let dan = vreme.getDay();
let sati = vreme.getHours();
// let sati = parseInt(prompt("Unesite koliko je sati"));
if (dan > 0 && dan < 6 && sati >= 9 && sati < 20) {
    console.log(`Danas je radni dan i butik radi`);
}
else if (dan == 0 || dan == 6 && sati >= 10 && sati < 18) {
    console.log(`Danas je vikend i butik radi`);
}
else {
    console.log("Butik je zatvoren");
}

//Kalkulator dva broja uz pomoc karaktera
let a = parseInt(prompt("Unesite prvi broj a:"));
let b = parseInt(prompt("Unesite drugi broj b:"));

let operator = prompt("Unesite simbol za neku od operacija:");

switch (operator) {
    case ('m'):
        console.log(`${a} * ${b} = ${a * b}`);
        break;

    case ('d'):
        console.log(`${a} / ${b} = ${a / b}`);
        break;

    case ('s'):
        console.log(`${a} + ${b} = ${a + b}`);
        break;

    case ('o'):
        console.log(`${a} - ${b} = ${a - b}`);
        break;
}