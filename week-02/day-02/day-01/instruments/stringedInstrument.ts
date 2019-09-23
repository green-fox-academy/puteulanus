import Instrument = require('./instrument')

abstract class StringedInstrument extends Instrument {

    protected numberOfStrings: number;

    constructor(name: string, numOfStrings: number) {
        super(name);
        this.numberOfStrings = numOfStrings;
    }

    abstract sound(): string;

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

    
}

export = StringedInstrument;