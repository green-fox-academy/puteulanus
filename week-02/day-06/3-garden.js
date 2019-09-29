
function Garden1(width, length) {
    this.width = width;
    this.length = length;
}
Garden1.prototype.area = function () {
    return this.width * this.length;
};
Garden1.prototype.circumference = function() {
    return this.width *2 + this.length * 2;
};
Garden1.prototype.efficiency = function() {
    return 1;
};

class Gargen2 {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    area() {
        return this.width * this.length;
    }

    circumference() {
        return this.width *2 + this.length * 2;
    }

    efficiency() {
        return 1;
    }
}

module.exports = Garden1;
