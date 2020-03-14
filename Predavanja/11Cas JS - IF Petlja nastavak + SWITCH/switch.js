let datum = new Date();

// let dan = parseInt(prompt("Unesite dan u nedelji:"));
let dan = datum.getDay();
switch (dan) {
    case (0):
        console.log("Nedelja.");
        break;

    case (1):
        console.log("Ponedeljak.");
        break;
    case (2):
        console.log("Utorak.");
        break;
    case (3):
        console.log("Sreda.");
        break;
    case (4):
        console.log("Cetvrtak.");
        break;
    case (5):
        console.log("Petak.");
        break;
    case (6):
        console.log("Subota.");
        break;
}

let ocena = parseInt(prompt("Unesite ocenu ucenika:"));
switch (ocena) {
    case (1):
        console.log("Nedovoljan.");
        break;
    case (2):
        console.log("Dovoljan.");
        break;
    case (3):
        console.log("Dobar.");
        break;
    case (4):
        console.log("Vrlo dobar.");
        break;
    case (5):
        console.log("Odlican.");
        break;
}

let broj = parseInt(prompt("Unesite broj za proveru:"));
switch (broj) {
    case (2):
        console.log("Uneli ste broj 2.");
        break;
    case (4):
        console.log("Unesli ste broj 4.");
        break;
    case (6):
        console.log("Uneli ste broj 6.");
        break;
    case (8):
        console.log("Uneli ste broj 8.");
        break;
    default:
        console.log("Pogresan broj je unet.");
}

let a = parseInt(prompt("Unesite prvi broj a:"));
let b = parseInt(prompt("Unesite drugi broj b:"));

let simbol = prompt("Unesite operaciju koju zelite:");
switch (simbol) {
    case ('m'):
        console.log(a * b);
        break;
    case ('d'):
        console.log(a / b);
        break;
    case ('s'):
        console.log(a + b);
        break;
    case ('o'):
        console.log(a - b);
}