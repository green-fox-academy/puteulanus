'use strict';

let animals = ['dog', 'cat', 'kitten'];

animals = animals.map(
    (x) => {
        return x + 's'
    }
)

console.log(animals);