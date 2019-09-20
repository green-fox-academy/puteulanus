'use strict';

const Gargen = require('./garden');
const Tree = require('./tree');
const Flower = require('./flower');

let garden = new Gargen();

garden.add(new Flower('yellow'))
    .add(new Flower('blue'));

garden.add(new Tree('purple'))
    .add(new Tree('orange'));

garden.show();

console.log("\n");

garden.watering(40);
garden.show();

console.log("\n");

garden.watering(70);
garden.show();