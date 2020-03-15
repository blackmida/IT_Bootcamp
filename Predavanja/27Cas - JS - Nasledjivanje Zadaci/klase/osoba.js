export class Osoba {
    constructor(i, p, gr) {
        this.ime = i;
        this.prezime = p;
        this.godRodj = gr;
    }

    get ime() {
        return this._ime;
    }
    set ime(i) {
        this._ime = i;
    }

    get prezime() {
        return this._prezime;
    }
    set prezime(p) {
        this._prezime = p;
    }

    get godRodj() {
        return this._godRodj;
    }
    set godRodj(gr) {
        if (gr < 0) {
            this._godRodj = 0;
        }
        else {
            this._godRodj = gr;
        }
    }

    ispisi() {
        console.log(`Osoba ${this.ime}, ${this.prezime}, ${this.godRodj}`);
    }

}