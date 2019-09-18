'use strict';

const mapWith = (array, callback) => {

  let output = [];


  for (let entity of array) {
    output.push(callback(entity));
  }

  return output;

}

const addOne = (number) => {

  return number + 1;

}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));

//expected result: [2, 3, 4]



// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = x => 
    Array.from(x).filter((char,index)=> index % 2 !== 1 ).join('')

console.log(mapWith(words, removeSecondLetter));

// expected result: ['mp','rdc', 'fle']