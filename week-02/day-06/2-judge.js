function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));
    }
}

function nonAnonymFunction(param1, param2) {
    return param1 === '' ? param2 : `${param1} ${param2}`;
}

function frameFunction(){
    multiPurposeFunction(nonAnonymFunction);
    multiPurposeFunction((param1, param2) => param1 === '' ? param2 : `${param1} ${param2}`);

}

frameFunction();