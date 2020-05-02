export class Automombil{
    constructor(max, min, cur){
        this.maxSpeed = max;
        this.minSpeed = min;
        this.currentSpeed = cur;
    }

    get maxSpeed(){
        return this._maxSpeed;
    }
    set maxSpeed(max){
        this._maxSpeed = max;
    }

    get minSpeed(){
        return this._minSpeed;
    }
    set minSpeed(min){
        this._minSpeed = min;
    }

    get currentSpeed(){
        return this._currentSpeed;
    }
    set currentSpeed(cur){
        this._currentSpeed = cur;
    }

    ubrzaj(ubrzanje){
        if(this.currentSpeed + ubrzanje <= this.maxSpeed){
            this.currentSpeed += ubrzanje;
        }
        else{
            this.currentSpeed = this.maxSpeed;
        }
    }

    uspori(smanjenje){
        if(this.currentSpeed - smanjenje >= this.minSpeed){
            this.currentSpeed -= smanjenje;
        }
        else{
            this.currentSpeed = this.minSpeed;
        }
    }
}