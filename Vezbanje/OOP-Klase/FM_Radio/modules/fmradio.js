export class FMRadio {
    constructor(s, f, t) {
        this.stanica = s;
        this.frekvencija = f;
        this.ton = t;
    }

    get stanica() {
        return this._stanica;
    }
    set stanica(s) {
        this._stanica = s;
    }

    get frekvencija() {
        return this._frekvencija;
    }
    set frekvencija(f) {
        if (f >= 87.5 && f <= 108) {
            this._frekvencija = f;
        }
        else {
            console.log(`Uneli ste frekvenciju nevazeceg opsega.`);
        }
    }

    get ton() {
        return this._ton;
    }
    set ton(t) {
        if (t >= 0 && t <= 20) {
            this._ton = t;
        }
        else {
            console.log(`Uneli ste nevalidnu vrednost za opseg jacine tona.`);
        }
    }

    promeniZvuk(simb) {
        let jacina = this.ton;
        switch (simb) {
            case '+':
                this.ton = jacina+1;
                break;

            case '-':
                this.ton = jacina-1;
                break;
        }
    }

    frekvencijaIskljuci(){
        this.frekvencija = 87.5;
    }

    stampaj(){
        console.log(`Radio stanica ${this.stanica} na frekvenciji ${this.frekvencija} MHz ima jacinu ${this.ton}`);
    }
}