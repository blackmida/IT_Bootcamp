export class Plivac {
    constructor(i, gr, rez) {
        this.ime = i;
        this.godinaRodjenja = gr;
        this.rezultat = rez;
    };

    get ime() {
        return this._ime;
    }
    set ime(i) {
        this._ime = i;
    }

    get godinaRodjenja() {
        return this._godinaRodjenja;
    }
    set godinaRodjenja(gr) {
        this._godinaRodjenja = gr;
    }

    get rezultat() {
        return this._rezultat;
    }
    set rezultat(r) {
        this._rezultat = r;
    }

    ispisi(){
        return `Plivac ${this.ime} je rodjen ${this.godinaRodjenja} i njegov najbolji rezultat ove godine je ${this.rezultat}`;
    }
}