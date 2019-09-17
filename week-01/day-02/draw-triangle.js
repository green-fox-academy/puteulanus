'use strict';

const lineCount = 4;

function draw_triangle(num) {
    let n = num;
    while(n--){
        console.log('*'.repeat(num - n));
    }
}

draw_triangle(lineCount);