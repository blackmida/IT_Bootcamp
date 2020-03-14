let i = 1;
let rez='';
while (i <= 20) {
    rez=rez+ ' ' + i; 
    i++;
}
console.log(rez);

//od 20 do 1
i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

//Od 20 do 1 parni
let n = 20;
while(n>=2){
    if(n%2==0){
        console.log(n);
    }
    n--;
}

//Suma od 1 do 100
let m=1;
let sum=0;
while(m<=100){
    sum=sum+m;
    m++;
}
console.log(sum);


// Suma od n do m
n = 25;
m = 55;
sum=0;
while(n<=m){
    sum=sum+n;
    n++;
}
console.log(sum);

// Suma od n do m svakog drugog
n = 1;
m = 5;
sum=0;
while(n<=m){
    sum=sum+n;
    n+=2;
}
console.log(sum);

// suma kvadrata brojeva od n do m
n=2;
m=5;
sum=0;
while(n<=m){
    sum+=n*n;
    n++;
}
console.log(sum);

// Sa koliko brojeva je deljiv uneti broj k

let k = 50;
sum=2;
i=2;
while(i<k){
    if(k%i==0){
        sum++;
    }
    i++;
}
console.log(sum);

