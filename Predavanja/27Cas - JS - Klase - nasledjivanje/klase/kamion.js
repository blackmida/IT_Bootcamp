import { Vozilo } from "./vozilo.js";

export class Kamion extends Vozilo{
    constructor(t,b,n){
        super(t,b);
        this.nosivost = n;
    }

    get nosivost(){
        return this._nosivost;
    }
    set nosivost(n){
        this._nosivost = n;
    }

    ispisiKamion(){
        console.log(`Kamion: ${this.tip}, ${this.boja}, ${this.nosivost}`);
    }
}