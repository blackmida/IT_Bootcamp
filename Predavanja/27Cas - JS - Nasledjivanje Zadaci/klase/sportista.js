import { Osoba } from "./osoba.js";

export class Sportista extends Osoba {
    constructor(i, p, godr, gradr) {
        super(i, p);
        this.godRodj = godr;
        this.gradRodj = gradr;
    }

    get godRodj() {
        return this._godRodj;
    }
    set godRodj(godr) {
        this._godRodj = godr;
    }

    get gradRodj() {
        return this._gradRodj;
    }
    set gradRodj(gradr) {
        this._gradRodj = gradr;
    }

    ispisiSportistu() {
        console.log('Sportista');
    }
}