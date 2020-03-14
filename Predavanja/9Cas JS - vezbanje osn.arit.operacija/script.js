let sat = 4;
let min = 55;
let ukupno = sat*60+55;
console.log("Ukupno je proslo", ukupno, "minuta");

let cenaRobe=250;
let novcanica=550;
let kusur = novcanica-cenaRobe;
console.log("Kusur koji treba vratiti je:", kusur);

const odnos=117.6;
let dinar=12000;
let evro = 88;
// let menjacnicaEvri=dinar/odnos;
// let menjacnicaDinari=evro*odnos;
console.log("Za unetu kolicinu dinara, komitent ce dobiti:", dinar/odnos, "evra.");
console.log("Za unetu kolicinu evra, komitent ce dobiti:", evro*odnos, "dinara.");

let dolar = 300;
console.log("Za unetu kolicinu dolara mozete dobiti:", (dolar*117)/odnos, "evra");

let celzijus = 30;
console.log("30 stepena celzijusovih u faranhajtima iznosi:", celzijus*1.8+32);
let farenhajt=120;
console.log("120 farenhajta u celzijsuiam iznosi:", (farenhajt-32)/1.8000);


celzijus = 30;
console.log("30 stepena celzijusovih u kelvinima iznosi:", celzijus+273.15);
let kelvin=120;
console.log("120 kelvina u celzijsuiam iznosi:", kelvin-273.15);