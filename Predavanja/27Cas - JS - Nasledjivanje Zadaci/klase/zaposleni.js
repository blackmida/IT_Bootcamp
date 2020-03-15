import { Osoba } from "./osoba.js";

export class Zaposleni extends Osoba {
    constructor(i, p, gr, pl, poz) {
        super(i, p, gr);
        this.plata = pl;
        this.pozicija = poz;
    }

    get plata() {
        return this._plata;
    }
    set plata(pl) {
        this._plata = pl;
    }

    get pozicija() {
        if (this._pozicija == 'ekonomista') {
            return `Zaposlen u ekonomskom sektoru`;
        }
        else {
            return this._pozicija;
        }
    }
    set pozicija(poz) {
        this._pozicija = poz;
    }

    ispisi() {
        console.log(`Zaposleni: ${this.ime} ${this.prezime} ${this.godRodj} ${this.plata} ${this.pozicija}`);
    }

    natprosecnaPlata(prosek) {
        if (this.plata > prosek) {
            return true;
        }
        else {
            return false;
        }
    }
}