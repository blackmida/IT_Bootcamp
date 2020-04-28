export class Krug{
    constructor(r){
        this.r = r;
    }

    get(){
        return this._r;
    }
    set(r){
        this._r = r;
    }

    obimKruga(){       
        return 2*this.r*3.14;
    };

    povrsinaKruga(){
        return Math.pow(this.r, 2)*Math.PI;
    }
}