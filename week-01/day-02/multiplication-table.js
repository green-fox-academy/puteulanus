'use strict';

const number = 15;

function multi_table(num) {
    for ( let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ` + i*num);
    }
}

console.log(multi_table(15));