'use strict';

let m = new Map();

m.set('978-1-60309-452-8','A Letter to Jo')
    .set('978-1-60309-459-7','Lupus')
    .set('978-1-60309-444-3','Red Panda and Moon Bear')
    .set('978-1-60309-461-0','The Lab');

m.forEach(
    (name, isbn) => {
        console.log(
            `${name} (ISBN: ${isbn})`
        );
    }
);

m.delete('978-1-60309-444-3');

m.forEach(
    (value,key) => {
        if (value === 'The Lab') {
            m.delete(key)
        }
    }
);

m.set('978-1-60309-450-4','They Called Us Enemy')
    .set('978-1-60309-453-5','Why Did We Trust Him?');

console.log(m.has('478-0-61159-424-8'));

console.log(m.get('978-1-60309-453-5'));