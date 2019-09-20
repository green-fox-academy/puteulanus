'use strict';

const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function sort_dominoes(dominoes) {

    let ds = dominoes.map(x=>x.values);
    let d1 = ds[0];
    ds.shift();
    let questions = [ [ d1, ds ] ]
    // loop start
    let q = questions[0];
    let p1 = q[0];
    let p2 = q[1];
    for (let dm of p2) {
        if (dm[0] === p1[p1.length-1][1]){
            
        }
    }



}

sort_dominoes(dominoes);

console.log(dominoes.toString());