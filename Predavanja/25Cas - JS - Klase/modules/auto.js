export class Auto {
    constructor(marka, boja, imaKrov) {
        this.marka = marka;
        this.boja = boja;
        this.imaKrov = imaKrov;
    }

    sviraj() {
        let m = this.marka;
        console.log(`Auto marke ${m} svira beep beep!`);
    }
};
