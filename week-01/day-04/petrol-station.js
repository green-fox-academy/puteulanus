class Station {
    constructor() {
        this.gasAmount = 5000;
    }

    refill(car) {
        this.gasAmount -= car.getCapacity();
        car.setGasAmount(car.getCapacity());
    }
}

class Car {
    constructor() {
        this.capacity = 100;
        this.gasAmount = 0;
    }

    getCapacity() {
        return this.capacity;
    }

    setGasAmount(num) {
        this.gasAmount = num;
    }
}

let s = new Station();
let c = new Car();

s.refill(c);
console.log(s.gasAmount,c.gasAmount);