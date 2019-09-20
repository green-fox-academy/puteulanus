'use strict';

class Aircraft {
    constructor(type, maxAmmo, baseDamage = 0, ammo = 0, priority = false) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.ammo = ammo;
        this.baseDamage = baseDamage;
        this.priority = priority;
    }

    fight() {
        let damage = this.ammo * this.baseDamage;
        this.ammo = 0;
        return damage;
    }

    refill(ammoNum) {
        this.ammo = Math.min(this.maxAmmo, this.ammo + ammoNum);
        return Math.max(0, this.ammo + ammoNum - this.maxAmmo);
    }

    getType() {
        return this.type;
    }

    getStatus() {
        return `Type ${this.type}, Ammo: ${this.ammo}, `
            +`Base Damage: ${this.baseDamage}, `
            +`All Damage: ${this.ammo * this.baseDamage}`
    }

    get isPriority() {
        return this.priority;
    }

    get need() {
        return this.maxAmmo - this.ammo;
    }
}

module.exports = Aircraft;