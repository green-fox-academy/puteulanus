'use strict';

const Aircraft = require('./aircraft')

class F12 {
    constructor(ammo = 0) {
        super('F12', 8, 30, ammo)
    }
}

module.exports = F12;