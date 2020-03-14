let svaDugmad = document.querySelectorAll('button');
svaDugmad.forEach(el => {
    el.style.margin = "15px";
});

let dugmeZdravo = document.getElementById('zdravo');
// dugmeZdravo.style.margin = '15px';
dugmeZdravo.addEventListener('click', () => {
    let zdravoParagraf = document.getElementById('zdravoP');
    zdravoParagraf.innerHTML = "Zdravo";
});

let brojac = 1;
let dugmeBrojac = document.getElementById("brojac");
let zdravoParagraf = document.getElementById('zdravoP');
// dugmeBrojac.style.margin = '15px';
dugmeBrojac.addEventListener('click', () => {
    brojac++;
    zdravoParagraf.innerText = `Vrednost brojaca je: ${brojac}`;
});


// ispis rezultata izmedju minus i plus
let r = 0;
let spanRezultat = document.getElementById('rezultat');
spanRezultat.innerText = r; // ispisuje rezultat u span
let dugmePlus = document.getElementById('plus');
dugmePlus.addEventListener('click', () => {
    r++;
    if(r%2==0){
    spanRezultat.innerText = r;
    }
});
let dugmeMinus = document.getElementById('minus');
dugmeMinus.addEventListener('click', () => {
    if (r > 0) {
        r--;
        spanRezultat.innerText = r;
    };
});

// input pa prikazi ime u paragrafu

let dugmePrikazi = document.getElementById('prikazi');
dugmePrikazi.addEventListener('click', () => {
    let input = document.getElementById('input');
    let inputValue = input.value;
    zdravoParagraf.innerText = `Zdravo: ${inputValue}`;
});

// 

let dugmeKvadriraj = document.getElementById('kvadriraj');
dugmeKvadriraj.addEventListener('click', ()=>{
    let input = document.getElementById('kvadrirajInput').value;
    let rezultat=input**2;
    document.getElementById('rezultatPar').innerHTML += `${input} na kvadrat je ${rezultat}.<br>`;
});

let dugmePrepolovi = document.getElementById('prepolovi');
dugmePrepolovi.addEventListener('click', ()=>{
    let rezultat = document.getElementById('prepoloviInput').value /2;
    document.getElementById('rezultatPar').innerHTML += `Nakon sto smo ga prepolovili broj iznosi ${rezultat}<br>`;
});

let dugmePovrsina = document.getElementById('povrsina');
dugmePovrsina.addEventListener('click', ()=>{
    // let r = document.getElementById('povrsinaInput').value;
    // let rezultat = r*r*3.14;
    
    let rezultat = document.getElementById('povrsinaInput').value**2*3.14;
    document.getElementById('rezultatPar').innerHTML += `Povrsina kruga za uneti poluprecnik je: ${rezultat}.<br>`;
});