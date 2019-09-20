'use strict';

const Plant = require('./plant')

class Tree extends Plant {
    constructor(color, waterContent = 0) {
        super(color, 0.4, 10, waterContent);
    }
}

module.exports = Tree;