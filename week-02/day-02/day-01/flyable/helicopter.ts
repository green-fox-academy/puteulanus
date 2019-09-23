import Vehicle = require('./vehicle')
import Flyable = require('./flyable')

class Helocopter extends Vehicle implements Flyable {

    constructor(width: number = 10, height: number = 20) {
        super('Helocopter', width, height);
    }

    fly(): void {
        console.log(`A ${this.name} is flying`);
    }

    land(): void {
        console.log(`A ${this.name} is landing`);
    }

    takeOff(): void {
        console.log(`A ${this.name} is takeoff`);
    }
    
}

export = Helocopter;