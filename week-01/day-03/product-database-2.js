'use strict';

let m = (new Map()).set('Eggs',200)
    .set('Milk',200)
    .set('Fish',400)
    .set('Apples',150)
    .set('Bread',50)
    .set('Chicken',550);

console.log(
    Array.from(m).filter(x=>x[1]<201).map(x=>x[0])
);

console.log(
    Array.from(m).filter(x=>x[1]>150).map(x=>`${x[0]}: ${x[1]}`)
);