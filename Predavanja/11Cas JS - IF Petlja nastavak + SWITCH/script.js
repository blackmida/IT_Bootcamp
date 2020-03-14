let datum = new Date();


// Da li je radni dan ili vikend
let dan = datum.getDay();
if (dan == 0 || dan == 6) {
    console.log("Danas je vikend");
}
else {
    console.log("Danas je radni rad");
}

// Zadatak 9 - dobro jutro, dobar dan i dobro vece
let sati = datum.getHours();
if (sati < 12) {
    console.log(`Dobro jutro. Trenutno je ${sati} sati.`);
}
else if (sati < 18) {
    console.log(`Dobar dan. Trenutno je ${sati} sati.`);
}
else {
    console.log(`Dobro vece. Trenutno je ${sati} sati.`);
}

// Zadatak 10 - uporedjivanje dva uneta datuma
let dan1 = 5;
let mesec1 = 6;
let godina1 = 1995;
let dan2 = 9;
let mesec2 = 9;
let godina2 = 

// Zadatak 11 - provera da li firma radi u ovom trenutku
sati = datum.getHours();
if (9 <= sati && sati < 17) {
    console.log("Programerska firma trenutno radi");
}
else {
    console.log("Firma je trenutno zatvorena.");
}

//Zadatak 12 - proveriti da li se vreme lekara preklapa
let pocetak1 = 9;
let kraj1 = 17;
let pocetak2 = 14;
let kraj2 = 22;

if (pocetak2 >= pocetak1 && pocetak2 <= kraj1) {
    console.log("Poklapaju se.");
}
else {
    console.log("Ne poklapaju se");
}

// Zadatak 13 - da li je uneti broj paran
let broj = parseInt(prompt("Unesite broj za koji zelite da proverite da li je paran:"));
if (broj % 2 == 0) {
    console.log("Uneti broj je paran");
}
else {
    console.log(`Uneti broj ${broj} nije paran.`);
}

// Zadatak 14 -  da li je broj deljiv sa 3 ili ne
broj = parseInt(prompt("Unesite broj da proverimo da li je deljiv sa 3:"));
if (broj%3==0){
    console.log(`Broj ${broj} je deljiv sa 3`);
}
else{

    console.log(`Broj ${broj} nije deljiv sa 3`);
}

// Zadatak 15 - uneti dva broja pa videti  koji je od njih manji i oduzeti ga od veceg unetog broja

let a = parseInt(prompt("Uneti prvi broj a:"));
let b = parseInt(prompt("Uneti drugi broj b:"));

if (a>b){
    console.log(`broj ${a} je veci od broja ${b} i njihova razlika iznosi ${a-b}`);
}
else{
    console.log(`broj ${b} je veci od broja ${a} i njiohva razlika iznosi ${b-a}`);
}

// Zadatak 16 - unosi se broj i ispituje se da li je veci ili manji od 0

a=parseInt(prompt("Unesite broj za koji zelite da proverite da li je veci ili maji od 0"));
if (a<=0){
    console.log(`Uneti broj ${a} je manji ili jednak 0 i njegv prethodnik je ${a-1}`);
}
else{
    console.log(`Uneti broj ${a} je veci od 0 i njegov sledbenik je ${a+1}`);
}

// Zadatak 17 - najveci, srednji i najmanji broj
/*a = parseInt(prompt("Unesite prvi broj a:"));
b = parseInt(prompt("Unesite drugi broj b:"));
let c = parseInt(prompt("Unesite treci broj c:"));
let max = a;
let min = a;
if(b>max){
    max=b;
}
if(c>max){
    max=c;
}
if(b<min){
    min=b;
}*/

// Zadaatak 18 - da li uneti broj ceo ili decimalni

a=prompt("Unesite broj koji zelite da proverite:");
if(a%1==0){
    console.log("Uneti broj je ceo broj");
}
else{
    console.log("Uneti broj je decimalan");
}

//Zadatak 19 je zadatrak 17

// Zadatak 20 - unos dva cela broja, pa ispitati da li je veci od njih paran
a=parseInt(prompt("Unesite prvi broj a:"));
b=parseInt(prompt("Unesite drugi broj b:"));
if(a>b){
    if(a%2==0){
        console.log(`Od unetih brojeva, broj ${a} je veci i on je paran.`);
    }
    else{
        console.log(`Od unetih brojeva, broj ${a} je veci, ali NIJE paran.`);
    }
}
else{
    if(b%2==0){
        console.log(`Od unetih brojeva, broj ${b} je veci i on je paran.`);
    }
    else{
        console.log(`Od unetih brojeva, broj ${b} je veci, ali NIJE paran.`);
    }
}

//  Zadatak 21 - najveci od 3 broja ali sa logickim operatorima
a=parseInt(prompt("Unesite prvi broj a:"));
b=parseInt(prompt("Unesite drugi broj b:"));
c=parseInt(prompt("Unesite treci broj c:"));

if(a>b && a>c){
    console.log(`Najveci je broj ${a}`);
}
else if(b>a && b>c){
    console.log(`Najveci je broj ${b}`);
}
else{
    console.log(`Najveci je broj ${c}`);
}

// Zadatak 22 - ispisati ekstremna temperatura manje od 15 i vece od 40
temperatura = parseInt(prompt("Unesite kolika je temperatura:"));
if (temperatura>40 || temperatura<-15){
    console.log("Temperatura je ekstremna");
}
else{
    console.log("Temperatura nije ekstremna");
}

// Zadatak 23 - da li je godina prestupna, deljiva sa 4, sa 100 nije, sa 400 jeste
let godina = datum.getFullYear();
if (godina%4==0 && godina%400==0 && godina%100!=0){
    console.log("Godina je prestupna");
}
else{
    console.log("Godina NIJE prestupna");
}