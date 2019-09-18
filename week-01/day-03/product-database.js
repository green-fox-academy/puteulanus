'use strict';

let m = (new Map()).set('Eggs',200)
    .set('Milk',200)
    .set('Fish',400)
    .set('Apples',150)
    .set('Bread',50)
    .set('Chicken',550);

console.log(m.get('Fish'));
console.log(Math.max(...Array.from(m.values())))
console.log(
    Array.from(m.values()).reduce((a,b) => a+b) / m.size
)
console.log(Array.from(m.values()).filter(x=>x<300).length)
console.log(Array.from(m.values()).indexOf(125) !== -1)
console.log(Math.min(...Array.from(m.values())))