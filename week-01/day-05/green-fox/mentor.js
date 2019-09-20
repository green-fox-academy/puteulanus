'use strict';

const Person = require('./person')

class Mentor extends Person {
    constructor(name='Jane Doe', age=30, gender='female', level='intermediate') {
        
    }

    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.');
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} level mentor.`)
    }
}

module.exports = Mentor;