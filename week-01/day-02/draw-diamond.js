'use strict';

const lineCount = 7;

function draw_diamond(num) {
    let arr = []
    let out = '';
    let n = num;
    do {
        out = out 
        + ' '.repeat((num-n)/2) 
        + '*'.repeat(n) 
        + ' '.repeat((num-n)/2);
        arr.push(out)
        out = ''
    } while (n -= 2 > 0)
    arr.reverse();
    arr.forEach(
        (str) => {
            console.log(str + "\n");
        }
    );
    arr.reverse();
    arr.forEach(
        (str) => {
            console.log(str + "\n");
        }
    );
}

console.log(draw_diamond(7));