'use strict';

let arr = Array(4).fill(Array(4))

for(let i = 0; i < 4; i++) {
    for(let u = 0; u < 4; u++) {
        if (u === 3 - i) {
            arr[i][u] = 1;
        } else {
            arr[i][u] = 0;
        }
    }
}

console.log(arr);