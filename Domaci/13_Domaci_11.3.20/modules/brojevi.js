export class Brojevi {
    constructor(prviBroj, drugiBroj) {
        this._prviBroj = prviBroj;
        this._drugiBroj = drugiBroj;
    }

    get prviBroj() {
        return this._prviBroj;
    }

    set prviBroj(prviBroj) {
        this._prviBroj = prviBroj;
    }

    get drugiBroj() {
        return this._drugiBroj;
    }

    set drugiBroj(drugiBroj) {
        this._drugiBroj = drugiBroj;
    }

    saberi(){
        return this._prviBroj + this._drugiBroj;
    }

    oduzmi(){
        return this._prviBroj - this._drugiBroj;
    }

    pomnozi(){
        return this._prviBroj * this._drugiBroj;
    }

    podeli(){
        if(this._drugiBroj!=0){
            return this._prviBroj/this._drugiBroj;
        }
        else{
            return alert('Uneli ste 0 kao delilac, a 0 se ne deli.')
        }
    }

}