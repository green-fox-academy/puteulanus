'use strict';

let al = 'EPAM';

function greet(name) {
    if(arguments.length > 0) {
        console.log(`Greetings, dear ${name}`);
    } else {
        console.log('Greet `al`')
    }
}

greet();
greet(al);