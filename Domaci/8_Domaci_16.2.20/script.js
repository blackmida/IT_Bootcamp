// vraca kubove od n do m
function suma(n, m) {
    if (n > m) {
        return 0;
    }
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i ** 3;
    }
    return sum;
}

let sumaKubova = console.log(suma(2, 5));

// zadatak 2 - racuna broj godina
function godine(godRodjenja) {
    let vreme = new Date();
    let trenutnaGod = vreme.getFullYear();
    if (godRodjenja > trenutnaGod) {
        return 0;
    }
    return trenutnaGod - godRodjenja;
}
let element = document.getElementById("div");
element.innerHTML += `<p>Korisnik ima ${godine(1995)} godine/a.</p>`;
element.innerHTML += `<p>Korisnik ima ${godine(2000)} godine/a.</p>`; // ovo je samo test primerak, ukoliko smeta za ocenjivanje, slobodno ga zakomentarisati


// zadatak 3 - broj brojeva deljviih sa k od n do m`
function deljiv(n, m, k) {
    if (n >= m) {
        document.getElementById("div").innerHTML += `<p>Uneti su pogresni parametri</p>`;
    }
    else {
        let br = 0;
        for (let i = n; i <= m; i++) {
            if (i % k == 0) {
                br++;
            }
        }
        document.getElementById("div").innerHTML += `<p>Broj brojeva deljivih sa ${k} u opsegu od ${n} do ${m} je ${br}.</p>`;
    }
}
deljiv(1, 10, 4);