export class Film {
    constructor(n, r, gi, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gi;
        this.ocene = o;
    }

    get naslov() {
        return this._naslov;
    }
    set naslov(n) {
        this._naslov = n;
    }

    get reziser() {
        return this._reziser;
    }
    set reziser(r) {
        this._reziser = r;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }
    set godinaIzdanja(gi) {
        if (gi > 1800) {
            this._godinaIzdanja = gi;
        }
        else {
            this._godinaIzdanja = 1800;
        }
    }

    get ocene(){
        return this._ocene;
    }

    set ocene(o){
        this._ocene = o;
    }

    stampaj() {
        console.log(`Film '${this.naslov}' rezirao ${this.reziser}, ${this.godinaIzdanja}.godine.`);
    }

    prosek(){
        let suma = 0;
        let br = this.ocene.length;
        let niz = this.ocene;
        niz.forEach(el => {
            suma+=el;
        });

        let arsr = suma/br;
        return arsr;
    }
}