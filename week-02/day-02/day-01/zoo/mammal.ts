import Animal = require('./animal');

class Mammal extends Animal {
    constructor(name: string){
        super(name);
    }

    breed(): string {
        return 'pushing miniature versions out';
    }
}

export = Mammal;