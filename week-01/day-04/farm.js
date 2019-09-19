const Animal = require('./animal')

class Farm {

    constructor() {
        this.animaiList = []
        this.slot = 5;
    }

    breed() {
        if (this.slot > 0) {
            this.animaiList.push(new Animal());
            this.slot--;
        }
    }

    slaughter() {
        let l = this.animaiList.map(
            animal=>animal.hunger
        );
        this.animaiList.splice(l.indexOf(Math.min(...l)),1)
    }
}

let f = new Farm();
f.breed();
f.breed();
f.breed();
f.animaiList[1].eat();
f.slaughter();
console.log(f.animaiList);