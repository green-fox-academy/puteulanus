'use strict';

function sum() {
    return [].slice.call(arguments).reduce(
        (a,b) => {return a+b}
    )
}

console.log(sum(1,2,3,4,5))