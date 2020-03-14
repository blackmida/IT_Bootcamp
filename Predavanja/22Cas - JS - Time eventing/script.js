let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let div = document.querySelector('#div');

let timer;


let sat = document.querySelector('#sat');
setInterval(function () {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(sati<10){
        sati = "0"+sati;
    };
    if(minuti<10){
        minuti = "0"+ sati;
    };
    if(sekunde<10){
        parseInt(sekunde='0'+sekunde);
    };
    sat.innerHTML = `${sati}:${minuti}:${sekunde}`;
}, 1000);

