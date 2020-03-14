export default class Film {
    constructor(naslov, reziser, godinaIzdanja, ocena) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja
        this.ocena = ocena;
    };

    set filmGodIzd(godinaIzdanja) {
        if (godinaIzdanja > 1800) {
            this.godinaIzdanja = godinaIzdanja;
        }
        else{
            this.godinaIzdanja=1800;
        }
    };

    set filmNaslov(naslov) {
        this.naslov = naslov;
    };

    set filmReziser(reziser) {
        this.reziser = reziser;
    };

    stampaj() {
        return this.naslov;
    };
};