var prosekMeseci = [1, 3, 8, 12, 17, 20, 22, 23, 18, 12, 7, 2];
let vreme = new Date();


let dan = {
    datum: "2020/02/24",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [-2, 3, 7, 12, 10, 6, 2, -1],
    mesec: vreme.getMonth(),

    prosek: function () {
        let suma = 0;
        this.temperature.forEach(el => {
            suma += el;
        });
        return suma / this.temperature.length;
    },

    natprosecna: function () {
        let prosek = this.prosek();
        let br = 0;
        this.temperature.forEach(el => {
            if (el > prosek) {
                br++;
            };
        });
        return br;
    },

    brojMaksimalnih: function () {
        let temp = this.temperature;
        let max = temp[0];
        for (let i = 1; i < temp.length; i++) {
            if (temp[i] > max) {
                max = temp[i];
            }
        }

        let br = 0;
        temp.forEach(el => {
            if (el == max) {
                br++;
            }
        });
        return br;
    },

    // prima dva merenja, i meri koliko je bilo merenja izmedju te dve temp.
    brojIzmedju: function (t1, t2) {
        let temp = this.temperature;
        let br = 0;
        temp.forEach(el => {
            if (t1 <= el && el <= t2) {
                br++;
            }
        });
        return br;
    },

    // u vecini dana temperatura bila iznad proseka
    iznadProseka: function () {
        let brIznad = 0;
        let brIspod = 0;
        let temp = this.temperature;
        let prosek = this.prosek();
        temp.forEach(el => {
            if (el > prosek) {
                brIznad++;
            }
            else {
                brIspod++;
            }
        });
        if (brIznad > brIspod) {
            return true;
        }
        else {
            return false;
        }

    },

    leden: function () {
        let temp = this.temperature;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] >= 0) {
                return false;
            };
        };
        return true;
    },

    tropski: function () {
        let temp = this.temperature;
        let br = 0;
        temp.forEach(el => {
            if (el >= 24) {
                br++;
            };
        });

        if (br > 0) {
            return `Dan je tropski.`;
        }
        else {
            return `Dan nije Tropski`;
        };
    },

    meteropate: function () {
        let temp = this.temperature;
        let br = 0;
        for (let i = 0; i < temp.length - 1; i++) {
            if (Math.abs(temp[i + 1] - temp[i]) >= 8) {
                return `Dan nije povoljan za meteropate`;
            };
        };
        return `Dan je povoljan za meteropate`;
    },

    neuobicajen: function () {
        temp = this.temperature;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] < -5) {
                if (this.kisa == true) {
                    return `Dan je neuobicajan`;
                };
            };

            if (temp[i] > 25) {
                if (this.oblacno == true) {
                    return `Dan je neuobicajan`;
                };
            };
        };

        if (this.oblacno == true && this.sunce == true && this.kisa == true) {
            return `Dan je neuobicajan`;
        }
        return `Dan je obican`;
    },

    iznadProsekaMesec: function () {
        let pros = this.prosek();
        let mes = this.mesec;
        let niz = prosekMeseci;
        if (niz[mes] < pros) {
            console.log(`Temperatura ovog dana je iznad mesecnog proseka`);
        }
        else {
            console.log(`Temperatura ovog dana nije iznad mesecnog proseka`);
        }
    }

}

console.log(dan);
console.log(`Prosecna temperatura je ${dan.prosek()}.`);
console.log(`Ukupno je izmereno ${dan.natprosecna()} temperatura sa natprosecnom vrednoscu. `);
console.log(`Ukupno je bilo ${dan.brojMaksimalnih()} merenja sa maksimalnom temperaturom.`);
console.log(dan.brojIzmedju(4, 9));
console.log(dan.iznadProseka());
// da li je leden
console.log(dan.leden());
// da li je tropski
console.log(dan.tropski());
// kakav je za meteropate
console.log(dan.meteropate());
// Neuobicajan
console.log(dan.neuobicajen());
// Iznad mesecnog proseka
dan.iznadProsekaMesec();

let dan2 = {
    datum: "2020/02/23",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperature: [0, 2, 5, 11, 7, 4, 1, -1, 8, 19, 20]
};

let dan3 = {
    datum: "2020/02/22",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [-5, -2, 0, 5, 8, 3, 2, -3]
};

let dani = [dan, dan2, dan3];

// prvi dan sa najvise merenja i ispisuje se prvi
let prviNajviseMerenja = dani => {
    let max = dani[0].temperature.length; //ovde stavljamo da je maksimum duzina niza prvog elementa iz dani
    let index = 0;
    dani.forEach((dan, i) => {
        if (dan.temperature.length > max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
};
prviNajviseMerenja(dani);

//ISTI KAO GORE SAMO MINIMUM
let poslednjiiNajviseMerenja = dani => {
    let max = dani[0].temperature.length; //ovde stavljamo da je maksimum duzina niza prvog elementa iz dani
    let index = 0;
    dani.forEach((dan, i) => {
        if (dan.temperature.length >= max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
};
prviNajviseMerenja(dani);

//  arrow f-ja koja broji koliko je bilo kisnih dana, koliko suncanih, koliko oblacnih i sve to ispisuje
let suncaniKisniOblacni = dani => {
    let brS = 0;
    let brK = 0;
    let brO = 0;
    dani.forEach(el => {
        if (el.kisa == true) {
            brK++;
        }
        if (el.sunce == true) {
            brS++;
        }
        if (el.oblacno == true) {
            brO++;
        }
    });
    console.log(`Broj suncanih dana je ${brS}, broj oblacnih dana je ${brO}, broj kisnih dana je ${brK}`);
};
suncaniKisniOblacni(dani);

console.log("Test poruka");
console.log("Druga test poruka");