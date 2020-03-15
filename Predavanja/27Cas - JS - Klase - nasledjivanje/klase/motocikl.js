import { Vozilo } from "./vozilo.js";

export class Motocikl extends Vozilo{
    constructor(t,b,bt){
        super(t,b);
        this.brojTockova = bt;
    }

    get brojTockova(){
        return this._brojTockova;
    }
    set brojTockova(bt){
        this._brojTockova = bt;
    }

    ispisiMotocikl(){
        console.log(`Motocikl: ${this.tip}, ${this.boja}, ${this.brojTockova}`);
    }
}