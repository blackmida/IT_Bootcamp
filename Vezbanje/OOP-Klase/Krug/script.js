import { Krug } from "./modules/krug.js";

let k1 = new Krug(2);
let k2 = new Krug(5);
let k3 = new Krug(4);
let k4 = new Krug(5);

let krugovi = [k1, k2, k3, k4];
console.log(`Obim kruga je ${k1.obimKruga()}`);
console.log(`Povrsina kruga je ${k1.povrsinaKruga()}`);

let upisanKrug = (k1, k2) => {
    if (k2.r <= k1.r) {
        return true;
    }
    else {
        return false;
    }
}

console.log(`${upisanKrug(k1, k2)}`);

/* 
let nekiNiz = [krugovi[0].r];
for (let i = 1; i < krugovi.length; i++) {
    if (krugovi[i].r <= krugovi[i - 1].r) {
        nekiNiz.push(krugovi[i].r)
    }
}

console.log(nekiNiz);
*/

let rastuci = krugovi => {
    let brojac = 0;
    for (let i = 0; i < krugovi.length - 1; i++) {
        if (krugovi[i].r <= krugovi[i + 1].r) {
            brojac++;
        }
    }

    if(brojac==krugovi.length-1){
        return true;
    }
    else{
        return false;
    }
}

console.log(`Svaki krug moze da se upise u svog sledbenika:`);
console.log(`${rastuci(krugovi)}`);