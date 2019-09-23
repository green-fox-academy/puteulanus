import StringedInstrument = require('./stringedInstrument');

class BassGuitar extends StringedInstrument {
    constructor(numOfStrings: number = 4) {
        super('BassGuitar',numOfStrings);
    }

    sound(): string {
        return 'Duum-duum-duum';
    }
}

export = BassGuitar;