let niz = ["1", "2", "3", "4", "5"];
for (let i = 0; i < 5; i++) {
    console.log(niz[i]);
}

// sabiranje
niz = [1, 5, 6, 8, 9];
let suma = 0;
for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
console.log(suma);

// mnozenje 
niz = [1, 5, 6, 8, 9];
let proizvod = 1;
for (let i = 0; i < niz.length; i++) {
    proizvod *= niz[i];
}
console.log(proizvod);

// srednja vrednost niza


// 5. maksimum niza
niz = [1, 5, 16, 8, 9];
let max = niz[0];
for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
        max = niz[i];
    }
}
console.log(max);

// 6. minimum niza
niz = [10, 5, 16, 3, 9];
let min = niz[0];
for (let i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
        min = niz[i];
    }
}
console.log(min);


// 8. indeks maksimuma
niz = [10, 5, 16, 3, 9];
max = niz[0];
let pozicija;
for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
        max = niz[i];
        pozicija = i + 1;
    }
}
console.log(max, pozicija);
// primer sa funkcijom
let maxIndex = niz => {
    max = niz[0];
    let pozicija;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            pozicija = i + 1; // kako bi se videla realna pozicija, a ne programska
        }
    }
    return pozicija
}
console.log(maxIndex([2, 5, 19, 3, 1]));

// 9. idenks minimuma
niz = [10, 5, 16, 3, 9];
min = niz[0];
// ovde treba da se definise promenljiva pozicija, ali ja je vec imam
for (let i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
        min = niz[i];
        pozicija = i + 1;
    }
}
console.log(min, pozicija);

// 10. broj elemenata vecih od srednje vrednsoti
niz = [10, 5, 16, 3, 9];
suma = 0;
let br = 0;
for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
let arsr = suma / niz.length;

for (let i = 0; i < niz.length; i++) {
    if (niz[i] > arsr) {
        br++;
    }
}
console.log(`Broj elemenata vecih od srednje vrednosti je ${br}`);


// 11. zbir pozitivnih elemenata niza
niz = [10, 5, -2, 16, 3, -5, 9, -15];
suma = 0;
for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
        suma += niz[i];
    }
}
console.log(`Suma svih pozitivnih elemenata niza je ${suma}`);


// 12. broj parnih elemenata u nizu
niz = [10, 5, -2, 16, 3, -5, 9, -15];
br = 0;
for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
        br++;
    }
}
console.log(`Ima ukupno ${br} elemenata koji su parni u ovom nizu.`);

// 13. broj parnih elemanta sa neparnim indeksom
niz = [10, 8, -2, 16, 3, 4, 9, -15];
br = 0;
for (let i = 1; i < niz.length; i += 2) {
    if (niz[i] % 2 == 0) {
        br++;
    }
}
console.log(`Ukupno ima ${br} parnih brojeva na neparnim pozicijama`);

// 14.suma elemanta sa parnim indeksom
niz = [10, 8, -2, 16, 3, 4, 9, -15];
suma = 0;
for (let i = 2; i < niz.length; i += 2) {
    suma += niz[i];
}
console.log(`Suma elemata sa parnim indeksom je ${suma}`);

// 15. promeniti znak svakom elementu celobrojnoh niza
niz = [10, 8, -2, 16, 3, 4, 9, -15];
for (let i = 0; i < niz.length; i++) {
    niz[i] *= -1;
}
console.log(niz);

// 16. promena znaka svakom neaprnom elementu sa parnim indeksom
niz = [10, 8, -2, 16, 3, 4, 9, -15];
for (let i = 0; i < niz.length; i += 2) {
    if (niz[i] % 2 != 0) {
        niz[i] *= -1;
    }
}
console.log(niz);

// 17. niz = stavke za kupovinu = neuredjan lista u html

niz = ["Banana", "Pomorandza", "Kivi", "Nar", "Limun"];
for (let i = 0; i < niz.length; i++) {
    document.getElementById("ul").innerHTML += `<li>${niz[i]}</li>`;
}

let dodajListu = niz => {
    let res = "";
    res = +"<ul>";
    for (let i = 0; i < niz.length; i++) {
        res += `<li>${niz[i]}</li>`;
    }
    res += "</ul>";
    return res;
}

let div = document.getElementById("div");
div.innerHTML += dodajListu(["jaja", "mleko", "jogurt"]);


// 18. niz kosarkaskih kluoba = tabela u cijim su redovima imena klubova

// let kluboviTabela = niz => {
//     document.getElementById("div").innerHTML += `<table></table>`;
//     for (let i = 0; i < niz.length; i++) {
//         return document.getElementsByTagName("table").innerHTML += `<td>${niz[i]}</td>`;
//     }
// }

niz = ["Lakers", "Boston", "Miami"];
let tabela = "<table>";
for (let i = 0; i < niz.length; i++) {
    tabela += `<tr><td>${niz[i]}</td></tr>`;
}
tabela += "</table>";

let divTabela = document.getElementById("tabela");
divTabela.innerHTML += tabela;

//  18. niz sa putanjama slika
niz = ["img/1.png", "img/2.png", "img/3.png"];
let slike = "";
for (let i = 0; i < niz.length; i++) {
    slike += `<img src='${niz[i]}'>`;
}

let imgDiv = document.getElementById("slike");
imgDiv.innerHTML += slike;

// 19. ispisati duzinu svakog elementa u nizu stringova

niz = ["Aca", "MacaMa", "Av", "Blablabla"];
for (let i = 0; i < niz.length; i++) {
    let brojac = 0;
    for (let k = 0; k < niz[i].length; k++) {
        brojac++;
    }
    console.log(`Duzina ${i} elementa niza je ${brojac}`);
}


// 20. najduzi element u nizu stringova
niz = ["Aca", "MacaMacaMaca", "Av", "Blablabla"];
max = "";
// MOZE I max=niz[0].length; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
pozicija = 0;
for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > max.length) {
        max = niz[i];
        pozicija = i;
    }
}
console.log(`Najduzi element niza je ${max} na poziciji ${pozicija}.`);

// 21. br elemenata u nizu cija je duzina veca od prosecne duzine elementa
niz = ["Aca", "MacaMacaMaca", "Av", "Blablabla", "vavavva"];
let duzina = 0;
for (let i = 0; i < niz.length; i++) {
    duzina += niz[i].length
}
let prosecnaDuzina = duzina / niz.length;
brojac = 0;
for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > prosecnaDuzina) {
        brojac++;
    }
}
console.log(`Prosecna duzina stringa u nizu je ${prosecnaDuzina}, a duzih stringova ima ${brojac}.`);

// 22. broj stringova u nizu koji sadrze 'a'
niz = ["Aca", "MucaMucaMuca", "Av", "HejDer", "aavavva"];
brojac = 0;
for (let i = 0; i < niz.length; i++) {
    if (niz[i].includes('a')) {
        brojac++;
    }
}
console.log(`Od svih elemenata niza samo ${brojac} sadrze slovo a`);

let brojElemenataSaKarakterom = (niz, slovo) => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes(slovo)) {
            br++;
        }
    }
    return br;
}
console.log(`Broj elemenata sa karaterom ${brojElemenataSaKarakterom(["Aca", "MucaMucaMuca", "Av", "HejDer", "aavavva"], "a")}`);

// 23. - broj stringova u nizu koji pocinju sa a ili A
niz = ["Aca", "MacaMacaMaca", "Av", "Blablabla", "vavavva"];
brojac = 0;
for (let i = 0; i < niz.length; i++) {
    if (niz[i].startsWith('a') || niz[i].startsWith('A')) {
        brojac++;
    }
}
console.log(`Ima ukupno ${brojac} elemanta koji pocinju sa a ili A`);

//  24. dati su nizovi a i b, napraviti da budu a0 b0 a1 b1 a2 b2 an-1 bn-1
let nizA = [0, 1, 2, 3, 4];
let nizB = [5, 6, 7, 8, 9];
let nizC = [];
for (let i = 0; i < nizA.length; i++) {
    nizC.push(nizA[i]);
    nizC.push(nizB[i]);
}
console.log(nizC);

// 25. c0 c1 c2 c3 c4 c0=a0*b0 itd
nizA = [0, 1, 2, 3, 4];
nizB = [5, 6, 7, 8, 9];
nizC = [];
for (let i = 0; i < nizA.length; i++) {
    nizC.push(nizA[i] * nizB[i]);
}
console.log(nizC);

let proizvodElNiza = (a, b) => {
    c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] * b[i]);
    }
    return c;
}
console.log(proizvodElNiza([1, 3, 5], [2, 4, 6]));

// 26. 
nizA = [2, 4, 6, 8, 10, 14];
nizB = [];
let n = nizA.length / 2;
for (let i = 0; i < n; i++) {
    let i_pom = nizA.length - i - 1;
    nizB.push((nizA[i]+nizA[i_pom])/2)
}
console.log(nizB);



let str = 'Zdravo svete!!!'
// slice od koje poz pocei podstring i kad zavrsiti
console.log(str.slice(6, 8));

// substr od koje pozicije poceti i broji narednih nekoliko karaktera
console.log(str.substr(4, 4));

// replace
console.log(str.replace('e', 'w'));