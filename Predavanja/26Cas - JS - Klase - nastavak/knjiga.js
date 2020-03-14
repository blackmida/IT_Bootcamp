export class Knjiga {
    constructor(n, a, gi, bs, c) {
        this.naslov = n;
        this.autor = a;
        this.godinaIzdanja = gi;
        this.brojStranica = bs;
        this.cena = c;
    }

    get naslov() {
        return this._naslov;
    }

    set naslov(n) {
        this._naslov = n;
    }

    get autor() {
        return this._autor;
    }

    set autor(a) {
        this._autor = a;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    set godinaIzdanja(gi) {
        this._godinaIzdanja = gi;
    }

    get brojStranica() {
        return this._brojStranica;
    }

    set brojStranica(bs) {
        if(bs<0){
            this._brojStranica=0;
        }
        else{
        this._brojStranica = bs;
        }
    }

    get cena() {
        return this._cena;
    }

    set cena(c) {
        if(c<0){
            this._cena = 0;
        }
        else{
        this._cena = c;
        }
    }

    stampaj(){
        console.log(`Knjiga: ${this.naslov} ${this.autor} ${this.godinaIzdanja} ${this.brojStranica} ${this.cena}`);
    }

    obimna(){
        if(this.brojStranica>600){
            return true;
        }
        else{
            return false;
        }
    }

    skupa(){
        if(this.cena>8000){
            return true;
        }
        else{
            return false;
        }
    }

    dugackoIme(){
        if(this.autor.lenth>28){
            return true;
        }
        else{
            return false;
        }
    }
}