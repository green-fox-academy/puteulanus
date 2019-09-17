'use strict';

function printer() {
    console.log(
        [].slice.call(arguments).forEach(
            (x) => {console.log(x)}
        )
    )
}

printer(1,2,3)