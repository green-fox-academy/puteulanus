'use strict';

class Carrier {
    constructor(ammo, health) {
        this.aircrafts = [];
        this.ammo = ammo;
        this.health = health;
    }

    add(aircraft) {
        this.aircrafts.push(aircraft);
    }

    fill() {
        this.aircrafts.filter(
            aircraft => aircraft.isPriority
        ).forEach(
            aircraft => {
                if (this.ammo > aircraft.need) {
                    this.ammo -= aircraft.need;
                    aircraft.refill();
                } else {
                    // throw an error
                }
            }
        )
    }

    fight() {

    }

    getStatus() {

    }
}