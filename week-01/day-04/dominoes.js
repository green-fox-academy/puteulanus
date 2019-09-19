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

function sort_dominoes(sorted_part, dominoes) {
    let tmp = [dominoes[0]]
    dominoes.shift();
    let ls = dominoes.map(x=>x.values[0])
    let rs = dominoes.map(x=>x.values[1])
    while(rs.indexOf(tmp[tmp.length-1].values[1]) !== -1) {
        //
    }
    while(ls.indexOf(tmp[0].values[0]) !== -1) {
        //
    }
    return false;
}

dominoes = sort_dominoes([],dominoes);

console.log(dominoes.toString());