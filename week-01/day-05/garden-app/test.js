'use strict';

const Gargen = require('./garden');
const Tree = require('./tree');
const Flower = require('./flower');

let garden = new Gargen();

garden.addFlower(new Flower('yellow'))
    .addFlower(new Flower('blue'));

garden.addTree(new Tree('purple'))
    .addTree(new Tree('orange'));

garden.show();

console.log("\n");

garden.watering(40);
garden.show();

console.log("\n");

garden.watering(70);
garden.show();