import StringedInstrument = require('./stringedInstrument');

class ElectricGuitar extends StringedInstrument {
    constructor(numOfStrings: number = 6) {
        super('ElectricGuitar',numOfStrings);
    }

    sound(): string {
        return 'Twang';
    }
}

export = ElectricGuitar;