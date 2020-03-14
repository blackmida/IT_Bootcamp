function helloName(name) {
    console.log(`Hello ${name}`);
}
let firstName = "Ana";
helloName(firstName);

function ispisiKoriniska(ime, prezime, godRodj) {
    console.log(`Korisnik ${ime} ${prezime} je rodjen ${godRodj}. godine`);
}

ispisiKoriniska("Marko", "Markovic", 1995);


function saberiBrojeve(a, b) {
    let zbir = a + b;
    console.log(`Zbir ${a} i ${b} je ${zbir}`);
}

saberiBrojeve(5, 8);

function digitron(x, y, o) {
    // console.log(`${x} + ${y}`);
    let rez;
    if (o == "+") {
        rez = x + y;
    }
    else if (o == "-") {
        rez = x - y;
    }
    else if (o == "*") {
        rez = x * y;
    }
    else {
        if (y == 0) {
            rez = "Nije dozvoljeno deliti nulom";
        }
        else {
            rez = x / y;
        }
    }
    console.log(rez);
}

digitron(10, 0, "/");


function zbir(a, b) {
    let rez = a + b + a;
    return rez;
}

let rezultat = zbir(5, 17);
console.log(rezultat);


function neparan(n) {
    if (n % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}

let broj = neparan(17);
console.log(broj);


function max2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

let maks2 = max2(15, 6);
console.log(maks2);

function max4(a, b, c, d) {
    let mak1 = max2(a, b);
    let mak2 = max2(c, d);
    let mak3 = max2(mak1, mak2);
    return mak3;
}

let maksimalan = max4(4, 7, 3, 2);
console.log(maksimalan);

// 
function sedmiDan(n) {
    let pomDan = n % 7;
    switch (pomDan) {
        case 0:
            return "Nedelja";
            break;
        case 1:
            return "Ponedeljak";
            break;
        case 2:
            return "Utorak";
            break;
        case 3:
            return "Sreda";
            break;
        case 4:
            return "Cetvrtal";
            break;
        case 5:
            return "Petak";
            break;
        case 6:
            return "Subota"
            break;
        default:
            return "Los unos";
    }
}

let dan = sedmiDan(17);
console.log(dan);


function suma(n, m) {
    let s = 0;
    for (let i = n; i <= m; i++) {
        s += i;
    }
    return s;
}

let sum = console.log(suma(2, 5));


function arsr(n, m) {
    let s = 0;
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            br++;
            s += i;
        }
    }
    return s / br;
}
let ar = console.log(arsr(12, 34));


function prikaz(adress) {
    document.getElementById("div").innerHTML = "<img src='img/" + adress + "'>";

    // let img = document.createElement("img");
    // img.src = "img/" + adress;
    // let div = document.getElementById("div");
    // div.appendChild(img);
}

prikaz("1.png");


function deljivSaTri(n, m) {
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            br++;
            console.log(i);
        }
    }
    return br;
}
let deljivi = console.log("Broj brojeva je:" + deljivSaTri(4, 10));


function slika(putanja) {
    // return "<img src='" + putanja +"'>"
    return `<img src='img/${putanja}'>`
}

let elem = document.getElementById("demo");
elem.innerHTML = slika("2.png");
console.log(elem.innerHTML);


function boji(color) {
    return `<p style='color: ${color}'> fafsafasfasfas</p>`;
}

elem.innerHTML += boji('red');
elem.innerHTML += boji("blue");

function paragraf(color, text) {
    return `<p style='color: ${color}'>${text}</p>`;
}
elem.innerHTML += paragraf("green", "Ovo je prosledjivanje i teksta i boje");

function font(size) {
    return `<p style='font-size:${size}px'>Ovo je tekst koji ima prosledjenu velicinu fonta</p>`
}
elem.innerHTML += font(26);


function ispisiRecenicu(size, recenica) {
    return `<p style='font-size:${size}px'>${recenica}</p>`;
}
for (let i = 20; i <= 45; i += 5) {
    elem.innerHTML += ispisiRecenicu(`${i}`, "ovo je recenica");
}