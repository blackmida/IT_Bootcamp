// roditelj element
let par = document.querySelector('p');

console.log(par.parentElement); //div
console.log(par.parentElement.parentElement); //body

console.log(par.parentElement.children); // vraca html kolekciju svega sto je u divu

console.log(par.nextElementSibling);
console.log(par.previousElementSibling);
console.log(par.parentElement.nextElementSibling.children[1]);
console.log(par.parentElement.parentElement.previousElementSibling);

// par.children - vraca html kolekciju 
// par.children[0] - vraca prvo dete paragrafa

let div = par.parentElement;
let decaDiva = div.children; //vraca html kolekciju

for (let i = 0; i < decaDiva.length; i++) {
    console.log(decaDiva[i]);
};
// skraceno
for (let i = 0; i < par.parentElement.children.length; i++) {
    console.log(par.parentElement.children[i]);
};

// ako hocemo da se krecemo forEach metodom onda konvertujemo u niz uz pomoc Array.from
let niz = Array.from(par.parentElement.children);
niz.forEach(el => {
    console.log(el);
});

// menjanje atributa
let link = document.querySelector('a');
link.setAttribute('href', 'http://www.wikipedia.org');
link.setAttribute('id', 'link1');
link.innerText = "Wikipedia";

console.log(link);

// svim linkovima postaviti da se otvaraju u novom tabu
document.querySelectorAll('a').forEach(el => {
    el.setAttribute('target', '_blank');
});

// svim slikama dodatni alterantivni tekst
document.querySelectorAll('img').forEach(el => {
    el.setAttribute('alt', 'Alternativni tekst');
});

document.querySelectorAll('p').forEach(el => {
    el.setAttribute('style', 'color:purple');
});

document.querySelectorAll('p').forEach((el, i) => {
    if (i % 2 == 0) {
        el.setAttribute('style', 'color:green');
        el.classList.add('error');
    }
    else {
        el.setAttribute('style', 'color:red');
        el.classList.add('success');
    }
});

// svim linkovima promeniti padding 5px font 18px text dec none
let sviLinkovi = document.querySelectorAll('a');

sviLinkovi.forEach((el, i) => {
    el.style.fontSize = '18px';
    el.style.padding = '5px';
    el.style.textDecoration = 'none';

    if (i % 2 == 0) {
        el.style.backgroundColor = 'green';
        el.style.color = 'purple';
    }
    else {
        el.style.backgroundColor = 'blue';
        el.style.color = 'white';
    }
});

// menjati font naizmenicno
let sviParagrafi = document.querySelectorAll('p');
sviParagrafi.forEach((el, i) => {
    if(i%3==0){
        el.style.fontSize = "15px";
    }
    else if(i%3==1){
        el.style.fontSize = "20px";
    }
    else{
        el.style.fontSize = "25px";
    };
});

sviParagrafi.forEach(el=>{
    if(el.textContent.includes('Error')){
        el.classList.add('error');
    }
    else if(el.textContent.includes('Success')){
        el.classList.add('success');
    };
});

// svi koji imaju error brise, a ostalima dodaje
sviParagrafi.forEach(el=>{
    el.classList.toggle('error');
});

// dodavanje div taga elementu
let divic = document.createElement("div");
divic.innerText = "OVO JE NOVI DIV";
document.body.appendChild(divic);

// dodavanje liste sa proizvoljnim stavkama u novi div
let lista = document.createElement("ul");
lista.innerHTML = '<li>Prva stavka</li><li>Druga stavka</li><li>Treca stavka</li>';
divic.appendChild(lista);

// izbacivanje prve stavke iz te liste
lista.removeChild(lista.childNodes[0]);

// u ul listi zameniti drugu stavku
var elmnt = document.createElement("li");
elmnt.innerText="Zamena stavke";
lista.replaceChild(elmnt,lista.childNodes[0]);

// dodatni jos jedan li al' da bude slika u ul listi
let liSlika = document.createElement('li');
liSlika.innerHTML='<img src="img/1.png">';
lista.appendChild(liSlika);