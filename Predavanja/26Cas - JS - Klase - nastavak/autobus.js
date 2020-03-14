export class Autobus{
    constructor(rb, bs){
        this.regBr = rb;
        this.brSed = bs;
    }

    set regBr(rb){
        this._regBr = rb;
    }

    set brSed(bs){
        this._brSed = bs;
    }

    get regBr(){
        return this._regBr;
    }

    get brSed(){
        return this._brSed;
    }

    stampaj(){
        console.log(`Autobus: ${this.regBr}, ${this.brSed}`);
    }

}