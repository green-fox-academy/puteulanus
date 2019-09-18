'use strict';

let m = (new Map()).set('William A. Lathan','405-709-1865')
    .set('John K. Miller','402-247-8568')
    .set('Hortensia E. Foster','606-481-6467')
    .set('Amanda D. Newland','319-243-5613')
    .set('Brooke P. Askew','307-687-2982')

console.log(m.get('John K. Miller'))

m.forEach(
    (phone, name) => {
        if (phone === '307-687-2982') {
            console.log(name);
        }
    }
)

console.log(m.has('Chris E. Myers'))