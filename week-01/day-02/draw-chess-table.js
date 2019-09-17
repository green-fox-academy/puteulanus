'use strict';

const lineCount = 6;

function draw_diagonal(num) {
    for(let i = 0; i < num; i++) {
        let out = '';
        for(let n = 0; n < num; n++){
            if ((n + i % 2) % 2 === 0) {
                out = out + '%';
            } else {
                out = out + ' ';
            }
        }
        console.log(out);
    }
}

draw_diagonal(lineCount);