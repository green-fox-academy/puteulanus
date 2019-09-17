'use strict';

let ag = ['Gin', 'Whiskey', 'Wine', 'Beer']

ag = ag.map(
    (str) => {
        return str.repeat(2)
    }
)

console.log(ag);