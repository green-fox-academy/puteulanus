'use strict';

const Tree = require('./tree');
const Flower = require('./flower');

class Garden {
    constructor() {
        this.trees = []
        this.flowers = []
    }

    addTree(tree) {
        this.trees.push(tree);
        return this;
    }

    addFlower(flower) {
        this.flowers.push(flower);
        return this;
    }

    watering(waterNum) {
        console.log(`Watering with ${waterNum}`)
        this.trees.filter(
            tree => tree.isThirst
        ).forEach(
            (tree,_,arr) => tree.watering(waterNum / arr.length)
        );
        this.flowers.filter(
            flower => flower.isThirst
        ).forEach(
            (flower,_,arr) => flower.watering(waterNum / arr.length)
        );
    }

    show() {
        this.flowers.forEach(
            flower => console.log(`The ${flower.color} Flower ${flower.isThirst ? 'needs' : 'doesnt need'} water`)
        );
        this.trees.forEach(
            tree => console.log(`The ${tree.color} Tree ${tree.isThirst ? 'needs' : 'doesnt need'} water`)
        );
    }
}

module.exports = Garden;