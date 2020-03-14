let suma2 = (a, b) => {
    return a + b;
}

console.log(suma2(2, 5));

let hello = () => {
    console.log("Hello world");
}

hello();

let echo = (s1, s2) => {
    let s = s1 + "," + s2;
    console.log(s);
}

echo("fasfasf", "fsafsa");


// Da li je neapran = true ili paran=false
let neparan = (n) => {
    if (n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(neparan(9));

// maks2 i maks4

let maks2 = (n, m) => {
    if (n > m) {
        return n;
    }
    else {
        return m;
    }
}
console.log(maks2(18, 55));

let maks4 = (n, m, j, k) => {
    if(maks2(n,m)>maks2(j,k)){
        return maks2(n,m);
    }
    else{
        return maks2(j,k);
    }
}
console.log(maks4(14,156,3,20));

// deljivSaTri

let deljivSaTri = (n,m) => {
    let br=0;
    for (let i=n; i<=m; i++){
        if(i%3==0){
            br++;
            console.log(i);;
        }
    }
}

deljivSaTri(1,10);

// prosledjuje adresu slike

let slika = (adresa) => {
   return document.getElementById("div").innerHTML += `<img src='img/${adresa}'>`;
}

slika("1.png");
slika("2.png");