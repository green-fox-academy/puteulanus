'use strict';

class Plant {
    constructor(color, absorptivity = 1, limit = 0, waterContent = 0) {
        this.color = color;
        this.absorptivity = absorptivity;
        this.waterContent = waterContent;
        this.limit = limit;
    }

    watering(waterNum) {
        this.waterContent += waterNum * this.absorptivity;
    }

    get isThirst() {
        return this.waterContent < this.limit;
    }
}

module.exports = Plant;