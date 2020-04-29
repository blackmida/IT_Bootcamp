export class Student {
    constructor(jmbg, i, p, nizOcena = []) {
        this.jmbg = jmbg;
        this.ime = i;
        this.prezime = p;
        this.ocene = nizOcena;
        this.prosek = function () {
            let sum = 0;
            this.ocene.forEach(el => {
                sum += el;
            });
            let arsr = sum/this.ocene.length;
            return arsr;
        };
    };

    get jmbg() {
        return this._jmbg;
    }
    set jmbg(jmbg) {
        if (jmbg.length == 13) {
            this._jmbg = jmbg;
        }
        else {
            console.log(`Uneli ste nevalidan JMBG.`);
        }
    }

    get ime() {
        return this._ime;
    }
    set ime(i) {
        this._ime = i;
    }

    get prezime() {
        return this._prezime;
    }
    set prezime(p) {
        this._prezime = p;
    }

    get ocene() {
        return this._ocene;
    }
    set ocene(o) {
        this._ocene = o;
        for (let i = 0; i < o.length; i++) {
            o[i] = Math.round(o[i]);
        };
    }

    ispis(){
        console.log(`Student ${this.ime} ${this.prezime} sa maticnim brojem ${this.jmbg} ima ocene ${this.ocene}, a prosececna ocena je ${this.prosek()}`);
    }
}