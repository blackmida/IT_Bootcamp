export class Pacijent {
    constructor(ime, visina, tezina) {
        this._ime = ime;
        this._visina = visina;
        this._tezina = tezina;
    }

    get ime() {
        return this._ime;
    }

    set ime(ime) {
        this._ime = ime;
    }

    get visina() {
        return this._visina;
    }

    set visina(visina) {
        if(visina>0 && visina<250){
            this._visina = visina;
        }
    }

    get tezina(){
        return this._tezina;
    }

    set tezina(tezina){
        if (tezina>0 && tezina<550){
            this._tezina=tezina;
        }
    }

    stampaj() {
        console.log(`Pacijent ${this._ime} je visok ${this._visina} metara i tezak ${this._tezina} kilograma`);
    }

    bmi() {
        let bmi = this._tezina / this._visina ** 2;
        return bmi;
    }

    kritican() {
        if (this.bmi() < 15 || this.bmi() > 40) {
            return true;
        }
        return false;
    }
};