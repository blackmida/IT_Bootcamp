// selektor po imenu taga
let paragraf = document.querySelector('p');
console.log(paragraf);

let div = document.querySelector('div');
console.log(div);

let klasaTest = document.querySelector('.test');
console.log(klasaTest);

// selektor za sve sto ima takav tag name
let sviParagrafi = document.querySelectorAll('p');

console.log(sviParagrafi); // pristupanju node listi svih paragrafa
console.log(sviParagrafi[0]); // pristupanje prvom paragrafu node lsite
sviParagrafi.forEach(para => {
    console.log(para);  // ispisivanje svih paragrafa node liste
});

// selektuje vise lemeneata po imenu klase
let klasaTestDoc = document.getElementsByClassName('test');
console.log(klasaTestDoc);

for (let i = 0; i < klasaTestDoc.length; i++) {
    console.log(klasaTestDoc[i]);
}

// innerText umesto innerHtml - razlika je sto u tekstu ddodajemo sammo tekst, a u innerhrml moramo i html tagove da dodamo
paragraf.innerText += " Ovo je promenjen prvi paragraf!";

paragraf.innerHTML += `<span> Ovo je span </span>`

// 1
sviParagrafi.forEach(el => {
    el.innerText += ' VAZNO!!!';
});

//2
let sviDivovi = document.querySelectorAll('div');
sviDivovi.forEach(el => {
    el.innerHTML += (`<h1>Najveci naslov<h1>`)
});

//3 u paragrafu ispisuje 
sviParagrafi.forEach( (el, index) => {
    el.innerText += `${(index+1)**2}`;
});

let imena = ['Marko', 'Janko', 'Stanko'];

sviParagrafi.forEach((el,index)=>{
    el.innerText += ` ${imena[index]}`;
});

let lista = document.querySelector('ul');
imena.forEach(el=>{
    // let item = `<li> ${el} </li>`;
    lista.innerHTML+=`<li> ${el} </li>`;
});

// od niz aimena ubacuje u tri reda tabele
let tabela = document.querySelector('table');
let sadrzaj = "";
imena.forEach(ime=>{
    let item = `<tr><td>${ime}</td></tr>`
    sadrzaj+=item;
});
tabela.innerHTML += sadrzaj;

// potomci i prebacivanje potomaka u iz html u niz
let potomci = document.body.children;
console.log(potomci);

let niz = Array.from(potomci);
niz.forEach(el=>{
    console.log(el);
});

potomci = document.querySelector('ul').children;
console.log(potomci);

niz = Array.from(potomci);
niz.forEach(el=>{
    console.log(el);
});


// promeniti da se svi linkovi otvaraju u novi tab
let linkovi = document.querySelectorAll('a');
linkovi.forEach(el=>{
    el.setAttribute('target', '_blank');
});

// slikama dodaje alt tekst
let slike = document.querySelectorAll('img');
slike.forEach(el=>{
    el.setAttribute('alt','Ovo je alternativni tekst slike');
});
