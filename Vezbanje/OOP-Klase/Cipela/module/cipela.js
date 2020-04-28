export class Cipela{
    constructor(naz, br, niz=[]){
        this.naz = naz;
        this.br = br;
        this.niz = niz;
    }

    get naz(){
        return this._naz;
    }
    set naz(n){
        this._naz=n;
    }

    get br(){
        return this._br;
    }
    set br(br){
        this._br=br;
    }

    get niz(){
        return this._niz;
    }
    set niz(niz){
        this._niz = niz;
    }
    
    zalepi(){
        // console.log(`Cipela je zalepljena.`);
        return `<p>Cipela je zalepljena</p>`;
    }

    prosiri(){
        // console.log(`Cipela je prosirena.`);
        return `<p>Cipela je prosirena</p>`;
    }

    usij(){
        // console.log(`Cipela je usivena.`);
        return `<p>Cipela je usivena</p>`;
    }
}