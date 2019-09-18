'use strict';

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."

let ln = quote.indexOf('It you')

quote = [
    quote.substr(0, ln+2),
    ' ',
    'always takes longer than',
    quote.substr(ln+2)
].join('')

console.log(quote);