'use strict';

let ajaj = [3,4,5,6,7]

ajaj.reverse();

console.log(ajaj);

let arr = []
for (let i = ajaj.length; i >= 0; i--) {
    arr.push(ajaj[i]);
}

console.log(arr);