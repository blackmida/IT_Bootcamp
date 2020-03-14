export default class Film {
    constructor(n, r, g, o) {
        this.fNaslov = n;
        this.fReziser = r;
        this.fGodinaIzdanja = g;
        this.fOcene = o;
    }
    stampaj() {
        console.log(`Film '${this.fNaslov}' rezirao ${this.fReziser}, ${this.fGodinaIzdanja}. godine`);
    }
    get fNaslov() {
        return this.naslov;
    }
    set fNaslov(n) {
        this.naslov = n;
    }
    get fReziser() {
        return this.reziser;
    }
    set fReziser(r) {
        this.reziser = r;
    }
    get fGodinaIzdanja() {
        return this.godinaIzdanja;
    }
    set fGodinaIzdanja(g) {
        if(g > 1800) {
            this.godinaIzdanja = g;
        }
        else {
            this.godinaIzdanja = 1800;
        }
    }

    get fOcene(){
        return this.ocene;
    }

    set fOcene(o){
        this.ocene = o;
    }

    prosecna(){
        let s = 0;
        let br = this.ocene.length;
        let niz = this.ocene;

        niz.forEach(el => {
            s+=el;
        });

        let arsr = s/br;
        return arsr;
    }

}