export class Autobus {
    constructor(rb, bs) {
        this.registracija = rb;
        this.sedista = bs;
    }
    get registracija() {
        return this._registracija;
    }
    get sedista() {
        return this._sedista;
    }

    set registracija(rb) {
        this._registracija = rb;
    }
    set sedista(bs) {
        this._sedista = bs;
    }

    ispis(){
        console.log(`Autobus sa registracijom ${this.registracija} ima ${this.sedista} sedista.`);
    }
}