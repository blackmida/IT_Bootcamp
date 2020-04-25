export class Radnik{
    constructor(i, p){
        this.ime = i;
        this.plata = p;
    }

    get ime(){
        return this._ime;
    }
    set ime(i){
        this._ime = i;
    }

    get plata(){
        return this._plata;
    }
    set plata(p){
        this._plata = p;
    }

    ispisi() {
        console.log(`Radnik ${this.ime} ima platu ${this.plata}`);
    }

}