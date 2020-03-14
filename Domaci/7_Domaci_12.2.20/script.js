let n = 2;
let m = 5;
let proizvod = 1;
for (let i = n; i <= m; i++) {
    proizvod *= i;
}
console.log(`Proizvod svih brojeva od ${n} do ${m} je ${proizvod}.`);

// 1.b suma kvadrata
n = 5;
m = 10;
let suma = 0;
for (i = n; i <= m; i++) {
    suma += i ** 2;
}
console.log(`Suma kvadarata svih brojeva od ${n} do ${m} je ${suma}.`);

// 2.Zadatak - While petlja 
n = 1;
suma = 0;
while (n <= 30) {
    if (n % 9 == 0) {
        suma += n;
    }
    n++;
}
console.log(`Suma svih brojeva koji su deljivi sa 9 u intervalu od 1 do 30 je ${suma}.`);