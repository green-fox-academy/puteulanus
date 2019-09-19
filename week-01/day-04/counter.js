'use strict';

class Counter {
    constructor(count = 0) {
        this.init_num = count;
        this.count = count;
    }

    add(num = 1) {
        this.count += num;
        return this;
    }

    get() {
        return this.count;
    }

    reset() {
        this.count = this.init_num;
        return this;
    }
}

let a = new Counter(5);
console.log(a.get())
console.log(a.add(5).get())
console.log(a.reset().get())