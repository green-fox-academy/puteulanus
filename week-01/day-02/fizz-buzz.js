'use strict';

function fizz_buzz(){
    for (let i = 1; i<= 100; i++) {
        let out = '';
        if (i % 3 === 0) {
            out = out + 'Fizz';
        }
        if (i % 5 === 0) {
            out = out + 'Buzz';
        }
        if (out === '') {
            out = out + i;
        }
        console.log(out);
    }
}

fizz_buzz();