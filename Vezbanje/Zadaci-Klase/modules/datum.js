export class Datum{
    constructor(d,m,g){
        this.dan = d;
        this.mesec = m;
        this.godina = g;
    }

    get dan(){
        return this._dan;
    }
    set dan(d){
        this._dan = d;
    }

    get mesec(){
        return this._mesec;
    }
    set mesec(m){
        this._mesec = m;
    }

    get godina(){
        return this._godina;
    }
    set godina(g){
        this._godina = g;
    }

    ispisi(){
        console.log(`Datum: ${this.dan}.${this.mesec}.${this.godina}`);
    }

    

    


}