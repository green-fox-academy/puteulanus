import Animal = require('./animal');

class Retile extends Animal {
    constructor(name: string){
        super(name);
    }

    breed(): string {
        return 'laying eggs';
    }
}

export = Retile;