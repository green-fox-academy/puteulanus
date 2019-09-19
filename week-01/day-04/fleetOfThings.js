'use strict';



const Thing = require('./thing');

const Fleet = require('./fleet');

class FleetOfThings {
    main() {
        const fleet = new Fleet();
        fleet.add(new Thing('Get Milk'));
        fleet.add(new Thing('Remove the obstacles'));
        let s = new Thing('Stand up');
        s.complete();
        fleet.add(s);
        let e = new Thing('Eat lunch');
        e.complete();
        fleet.add(e);
        this.print(fleet.getThings());
    }

    print(things) {
        for (let thing of things) {
            console.log((thing.getCompleted() ? '[x] ' : '[ ] ') + thing.getName());
        }
    }
}

(new FleetOfThings).main()

// -  You have the `Thing` class

// -  You have the `Fleet` class

// -  Create the `FleetOfThings` class with a `main` method

// -  Download those, use those

// -  In the `main` method create a fleet

// -  Achieve this output:

//  Crete a fleet of things to have this output:



// 1. [ ] Get milk

// 2. [ ] Remove the obstacles

// 3. [x] Stand up

// 4. [x] Eat lunch



// Hint: You have to create a `print()` method as well