import{hello, niz} from "./pozdrav";

let greet = name => {
    console.log(`Hello, ${name}`);
}

greet('Pera');
greet('Mika');
greet('Laza');

hello();
console.log(niz);