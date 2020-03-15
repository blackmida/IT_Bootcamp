import {Vozilo} from "./klase/vozilo.js";
import {Automobil} from "./klase/automobil.js";
import {Kamion} from "./klase/kamion.js";
import { Motocikl } from "./klase/motocikl.js";

let v1 = new Vozilo("drumsko", "crvena");
v1.ispisi();

let a1 = new Automobil("drumsko","plava", "NI-111AA");
a1.ispisi();
a1.vozi();
a1.ispisiAutomobil();


let k1 = new Kamion("drumsko", "siva", "16 tona");
k1.ispisiKamion();

let m1 = new Motocikl("drumski", "zeleni", 2);
m1.ispisiMotocikl();
console.log(m1.tip);