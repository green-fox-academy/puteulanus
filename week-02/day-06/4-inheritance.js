const Garden1 = require('./3-garden');

function Playground(width, length) {
    Garden1.call(this, width, length);
}
Playground.prototype = Object.create(Garden1.prototype);
Playground.prototype.constructor = Playground;
Playground.prototype.toys = [];
Playground.prototype.addToy = function (toy) {
    this.toys.push(toy);
};