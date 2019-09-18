'use strict';

let m = new Map();

console.log(m.size === 0);

m.set(97,'a')
    .set(98,'b')
    .set(99,'c')
    .set(65,'A')
    .set(66,'B')
    .set(67,'C');

let keys = m.keys();
while(key = keys.next().value){
    console.log(key)
}

m.forEach(
    (value, key) => {
        console.log(value);
    }
)

m.set(68,'D')

console.log(m.size)

console.log(m.get(99))

m.delete(100)

m.clear()