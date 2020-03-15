import { Sportista } from "./sportista.js";

export class Kosarkas extends Sportista {
    constructor(i, p, godr, gradr, po) {
        super(i, p, godr, gradr);
        this.poeni = po;
    }

    get poeni() {
        return this._poeni;
    }
    set poeni(po) {
        this._poeni = po;
    }

    ispisiKosarkasa(){
        console.log(`Kosarkas: ${this.ime} ${this.prezime}`);
    }

    brPoena(){
        let sum = 0;
        this.poeni.forEach(el => {
            sum+=el;
        });
        return sum;
    }
}