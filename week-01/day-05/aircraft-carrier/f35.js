'use strict';

const Aircraft = require('./aircraft')

class F35 {
    constructor(ammo = 0) {
        super('F35', 12, 50, ammo, true)
    }
}

module.exports = F35;