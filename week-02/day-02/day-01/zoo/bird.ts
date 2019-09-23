import Animal = require('./animal');

class Bird extends Animal {
    constructor(name: string){
        super(name);
    }

    breed(): string {
        return 'laying eggs';
    }
}

export = Bird;