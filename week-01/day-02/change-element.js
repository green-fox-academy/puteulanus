'use strict';

let s = [1,2,3,8,5,6]

s = s.map(
    (num) => {
        if (num === 8) {return 4}
    }
)

console.log(s[3]);