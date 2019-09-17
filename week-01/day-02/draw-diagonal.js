'use strict';

const lineCount = 6;

function draw_square(num) {
    console.log('%'.repeat(num));
    let n = num - 2
    while((n)--) {
        console.log('%' 
        + ' '.repeat(num-3-n) 
        + '%'
        + ' '.repeat(n) 
        + '%')
    }
    console.log('%'.repeat(num));
}

draw_square(lineCount)