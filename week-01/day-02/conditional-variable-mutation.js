'use strict';

const a = 24;
let out = 0;

if ( a % 2 === 0) {
  out++;
}

console.log(out);

const b = 13;
let out2 = '';

if ( b >= 10 && b <= 20 ) {
  out2 = 'Sweet!';
} else if ( b < 10 ) {
  out2 = 'More!';
} else {
  out2 = 'Less!';
}

console.log(out2);

let c = 123;
const credits = 100;
const isBonus = false;

if (!isBonus){
  if ( credits >= 50 ) {
   c -= 2;
  } else if (credits < 50 ) {
   c -= 1;
  }
}

console.log(c);

const d = 8;
const time = 120;
let out3 = '';

if (d % 4 === 0) {
  if (time <= 200) {
    out3 = 'check';
  } else {
    out3 = 'Time out';
  }
} else {
  out3 = 'Run Forest Run!';
}
