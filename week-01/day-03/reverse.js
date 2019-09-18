'use strict';

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reverse(str) {
    return [].slice.call(str).reverse().join('');
}

console.log(reverse(reversed));