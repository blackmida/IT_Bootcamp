export class Radnik{
    constructor(i, pl){
        this.ime = i;
        this.plata = pl;
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
    set plata(pl){
        this._plata = pl;
    }


}