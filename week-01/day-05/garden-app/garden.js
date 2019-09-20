'use strict';

const Tree = require('./tree');
const Flower = require('./flower');

class Garden {
    constructor() {
        this.plants = [];
    }

    add(plant) {
        this.plants.push(plant);
        return this;
    }

    watering(waterNum) {
        console.log(`Watering with ${waterNum}`)
        this.plants.filter(
            plant => plant.isThirst
        ).forEach(
            (plant,_,arr) => plant.watering(waterNum / arr.length)
        );
    }

    show() {
        this.plants.forEach(
            plant => console.log(`The ${plant.color} ${plant.constructor.name} ${plant.isThirst ? 'needs' : 'doesnt need'} water`)
        );
    }
}

module.exports = Garden;