import Reservations = require("./reservations");

class Reservation {
    private code: string;
    private dow: string;

    constructor(code: string, dow: string) {
        this.code = code;
        this.dow = dow;
    }

    getDow(): string {
        return this.dow;
    }

    getCode(): string {
        return this.code;
    }
}

export = Reservation;