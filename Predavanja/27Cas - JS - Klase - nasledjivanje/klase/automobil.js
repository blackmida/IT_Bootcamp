import {Vozilo} from "./vozilo.js";
export class Automobil extends Vozilo{

    constructor(t,b,rb){
        super(t,b);
        this.regBr = rb;
    }

    get regBr(){
        return this._regBr;
    }

    set regBr(rb){
        this._regBr = rb;
    }

    ispisiAutomobil(){
        console.log(`Automobil: ${this.tip} ${this.boja} ${this.regBr}.`);
    }
}