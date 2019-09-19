const Sharpie = require('./sharpie');

class SharpieSet {

    constructor() {
        this.sharpies = []
    }

    addShrpie(sharpie) {
        this.sharpies.push(sharpie);
        return this;
    }

    countUsable() {
        return this.sharpies.filter(
            sharpie => sharpie.inkAmount > 0
        ).length
    }

    removeTrash () {
        this.sharpies = this.sharpies.filter(
            sharpie => sharpie.inkAmount > 0
        )
    }
}

let s = (new SharpieSet).addShrpie(new Sharpie('red',10.0))
    .addShrpie(new Sharpie('blue',10,0))

console.log(s.sharpies);
console.log(s.countUsable());
console.log(s.removeTrash());
console.log(s.sharpies);