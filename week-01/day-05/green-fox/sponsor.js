'use strict';

const Person = require('./person')

class Sponsor extends Person {
    constructor(name='Jane Doe', age=30, gender='female', company='Google') {
        super(name,age,gender);
        this.company = company;
        this.hiredStudents = 0;
    }

    getGoal() {
        console.log('My goal is: Hire brilliant junior software developers.');
    }

    hire() {
        this.hiredStudents++;
    }

    introduce() {
        console.log(
            `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} `
                +`who represents ${this.company} `
                +`and hired ${this.hiredStudents} students so far.`
        )
    }
}

module.exports = Sponsor;