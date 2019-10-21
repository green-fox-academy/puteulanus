
// Counter_Change
function increaseOne() {
    return {type: 'Counter_Change', num: 1}
}

// Counter_Change
function decreaseOne() {
    return {type: 'Counter_Change', num: -1}
}

// Counter_Change
function increaseNum(num) {
    return {type: 'Counter_Change', num }
}

// Counter_Change
function decreaseNum(num) {
    return {type: 'Counter_Change', num: -num}
}

// Counter_Set
function resetCounter() {
    return {type: 'Counter_Set', num: 0}
}

// Counter_Set
function setCounter(num) {
    return {type: 'Counter_Set', num }
}

export {increaseNum, decreaseNum, increaseOne, decreaseOne, resetCounter, setCounter}