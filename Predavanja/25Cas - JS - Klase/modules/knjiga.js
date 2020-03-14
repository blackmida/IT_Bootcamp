export class Knjiga {
    constructor(naslov, autor, godinaIzdanja, brojStrana, cena) {
        this._naslov = naslov;
        this._autor = autor;
        this._godinaIzdanja = godinaIzdanja;
        this._brojStrana = brojStrana;
        this._cena = cena;
    }

    stampaSve() {
        console.log(`Knjiga ${this._naslov} koju je napisao ${this._autor} je izdata ${this._godinaIzdanja} godine i ime ${this.brojStrana} strana i kosta ${this._cena}`);
    }

    daLiJeObimna(){
        if(this._brojStrana>600){
            return true;
        }
        else{
            return false;
        }
    }

    daLiJeSkupa(){
        if(this._cena>8000){
            return true;
        }
        else{
            return false;
        }
    }

    daLiJeDugacko(){
        if(this._autor.length>18){
            return true;
        }
        else{
            return false;
        }
    }
}