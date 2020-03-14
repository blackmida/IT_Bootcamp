let dan1 = {
    datum: '17.2.2020',
    kisa: false,
    sunce: true,
    oblacno: false,
    vrednostiTemperature: [7, 12, 17, 26, 15],

    prosecnaTemperatura: function () {
        let suma = 0;
        this.vrednostiTemperature.forEach(el => {
            suma += el;
        });
        return suma / this.vrednostiTemperature.length;
    }
};

let dan2 = {
    datum: '18.2.2020',
    kisa: true,
    sunce: true,
    oblacno: false,
    vrednostiTemperature: [11, 15, 22, 28, 14],

    prosecnaTemperatura: function () {
        let suma = 0;
        this.vrednostiTemperature.forEach(el => {
            suma += el;
        });
        return suma / this.vrednostiTemperature.length;
    }
};

let dan3 = {
    datum: '19.2.2020',
    kisa: true,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [4, 7, 14, 11, 8],

    prosecnaTemperatura: function () {
        let suma = 0;
        this.vrednostiTemperature.forEach(el => {
            suma += el;
        });
        return suma / this.vrednostiTemperature.length;
    }
};

// niz objekata
let dani = [dan1, dan2, dan3];

// arrow f-ja maksTemperatura

let maksTemperatura = dani => {
    let maks = -Infinity;
    dani.forEach(el => {
        el.vrednostiTemperature.forEach(t => {
            if (t > maks) {
                maks = t;
            };
        });
    });
    return maks;
};

// pozivanje unutrasnje metode za prosecnu temperaturu
console.log(`Prosecna temperatura za dan ${dan1.datum} je: ${dan1.prosecnaTemperatura()}`);
console.log(`Prosecna temperatura za dan ${dan2.datum} je: ${dan2.prosecnaTemperatura()}`);
console.log(`Prosecna temperatura za dan ${dan3.datum} je: ${dan3.prosecnaTemperatura()}`);

// Pozivanje metode za maksimalnu teperaturu
console.log(`Maksimalna temperaturu bila je: ${maksTemperatura(dani)}`);

