import Bird = require('../zoo/bird')
import Flyable = require('./flyable')

class FlyingBird extends Bird implements Flyable {
    
    fly(): void {
        console.log(`A ${this.getName()} is flying`);
    }

    land(): void {
        console.log(`A ${this.getName()} is landing`);
    }

    takeOff(): void {
        console.log(`A ${this.getName()} is takeoff`);
    }
}

export = Flyable;