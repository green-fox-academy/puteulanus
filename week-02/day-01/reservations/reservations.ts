import Reservationy = require('./reservationy')
import Reservation = require('./reservation')

class Reservations implements Reservationy {

private booked_reservations: Reservation[];

    getDowBooking(): string {
        return;
    }
    getCodeBooking(): string {
        return;
    }

    bookNewOne(dow: string) {
        this.booked_reservations.push(new Reservation(Math.random().toString(36).substr(2,8).toUpperCase(), dow));
    }
}

export = Reservations;