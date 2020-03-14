for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (i = 20; i >= 1; i--) {
    console.log(i);
}

//parni do 20
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// ispisati dvostruku vrednost


// suma od 1 do 100
let sum = 0;
for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// suma brojeva od n do m
sum = 0;
let n = 25;
let m = 50;
for (i = n; i <= m; i++) {
    sum += n;
}
console.log(sum);

// suma kvadrata od n do m
sum = 0;
n = 1;
m = 5;
for (i = n; i <= 5; i++) {
    sum += i ** 2;
}
console.log(sum);


// slike u html redom od 1 do 3
for (i = 1; i <= 3; i++) {
    // div.innerHTML = "<img src='img/1.jpg'>";

    let img = document.createElement("img"); // kreiraj img tagove u html
    img.src = "img/" + i + ".jpg"; //pretraga slika
    img.style = "width: 33%";
    let div = document.getElementById("div");
    div.appendChild(img);
}

/*
let div = document.getElementById("slika");
for (let i = 1; i <= 16; i++) {
    // div.innerHTML += "<img src=img/" + i + ".png>";
    if(i%3==1){
        div.innerHTML += "<img src=img/1.png>";
    }
    else if(i%3==2){
        div.innerHTML += "<img src=img/2.png>";
    }
    else{
        div.innerHTML += "<img src=img/3.png>";
    }
}
 */

// sabrati sve brojeve deljive sa 9 u intervalu od 1 do 30
n = 1;
m = 30;
sum = 0;
for (i = n; i <= m; i++) {
    if (i % 9 == 0) {
        sum += i;
    }
}
console.log(sum);

//  prozivod svih brojeva deljivh sa 11 od 20 do 100
n = 20;
m = 100;
let pro = 1;
for (i = n; i <= m; i++) {
    if (i % 11 == 0) {
        pro *= i;
    }
}
console.log(pro);

// deljivih sa 13 od 5 do 150, koliko ih ima
n = 5;
m = 150;
let brojac = 0;
for (i = n; i <= m; i++) {
    if (i % 13 == 0) {
        brojac++;
    }
}
console.log(`U intervalu od 5 do 150 ima ukupno ${brojac} brojeva koji su deljivi sa 13.`);

// aritmeticka sredina od n do m
n = 5;
m = 150;
brojac = 0;
sum = 0;
for (i = n; i <= m; i++) {
    brojac++;
    sum += i;
}
console.log(`Aritmeticka sredina brojva od ${n} do ${m} je ${sum / brojac}`);

// koliko je brojeva pozitivno, a koliko negativno od n do m
n = -5;
m = 15;
let brojacPoz = 0;
let brojacNeg = 0;
for (i = n; i <= m; i++) {
    if (i < 0) {
        brojacNeg++;
    }
    else {
        brojacPoz++;
    }
}
console.log(`U unetom intervalu od ${n} do ${m} ima ukupno ${brojacNeg} negativnih i ${brojacPoz} pozitivinih brojeva`);

// koliko je brojeva od 5 do 50 deljivo sa 3 i sa 5
n = 5;
m = 50;
brojac = 0;
for (i = n; i <= m; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        brojac++;
    }
}
console.log(`U ovom intervalu od 5 do 50 ima ukupno ${brojac} brojeva deljivih i sa 3 i sa 5`);

n = 5;
m = 15;
a = 3;
proizvod = 1;
for (i = n; i <= m; i++) {
    if (i % a == 0) {
        proizvod *= i;
    }
}
console.log(proizvod);