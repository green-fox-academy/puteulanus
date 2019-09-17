'use strict';

function factorio(num) {
    let n = num;
    let arr = [];
    while(n--){
        arr.unshift(n+1);
    }
    return arr.reduce(
        (a,b) => {return a*b}
    )
}

factorio(4);