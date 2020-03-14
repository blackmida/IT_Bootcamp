let datum = new Date();

let sati = datum.getHours();
let minuti = datum.getMinutes();

console.log(`Trenutno je ${sati} sati i ${minuti} minuta`);

let minutaOdPonoci = sati * 60 + minuti;
console.log(`Trenutno je proslo ${minutaOdPonoci} minuta od ponoci`);


let a = parseInt(prompt("Unesite prvi broj a:"));
let b = parseInt(prompt("Unesite drugi broj b:"));
if (a > b) {
    console.log(`${a} je vece od ${b}`);
}
else {
    console.log(`${b} je vece od ${a}`);
}

let temperatura = parseInt(prompt("Unesite trenutnu temperaturu:"));
if (temperatura>=0){
    console.log(`temperatura iznosi ${temperatura} i to znaci da je u plusu`);
}
else{
    console.log(`Temperatura iznosi ${temperatura} i to znaci da je u minusu`);
}

// DA LI JE MUSKI ILI ZENSKI POL
let pol=prompt("Unesite vas pol:");
let div = document.getElementById('slika');
if(pol=="m"){
    console.log("vi ste muskarac");
    div.innerHTML = "<img src='male.png'>";
}
else if(pol=="z"){
    console.log("Vi ste gospodja");
    div.innerHTML = "<img src='female.jpg'>";
}
else{
    console.log("Nedefinisan");
}

// DA LI JE PREPODNE ILI POPODNE
if (sati >= 12) {
    console.log("PM");
}
else {
    console.log("AM");
}

// provera punoletstva
let godina = datum.getFullYear();
let godRodjenja = prompt("Unesite Vasu godinu rodjenja:");
if ((godina - godRodjenja) >= 18) {
    console.log("Vi ste punoletni");
}
else {
    console.log("Vi ste maloletni");
}

//maksimalni broj
a = parseInt(prompt("Unesite prvi broj a:"));
b = parseInt(prompt("Unesite drugi broj b:"));
let c = parseInt(prompt("Unesite treci broj c:"));
let max = Math.max(a, b, c);
console.log(max);


// DRUGI NACIN BEZ METODE MAX
// let max = a;
// if (b > c) {
//     max = b;
// }
// else if (c > a) {
//     max = c;
// }
// console.log(max);

