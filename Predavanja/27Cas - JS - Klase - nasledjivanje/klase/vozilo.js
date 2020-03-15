export class Vozilo{
    constructor(t, b){
        this.tip = t;
        this.boja = b;
    }

    get tip(){
        return this._tip;
    }
    set tip(t){
        this._tip = t;
    }

    get boja(){
        return this._boja;
    }
    set boja(b){
        this._boja = b;
    }

    ispisi(){
        console.log(`Tip vozila: ${this.tip}, boje: ${this.boja}`);
    }

    vozi(){
        console.log(`Vozilo je u pokretu!`);
    }
}