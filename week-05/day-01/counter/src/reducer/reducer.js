
const initState = {
    counter: 0,
    tags: []
};

function myReducer(state = initState, action) {
    switch (action.type) {
        case 'Counter_Change':
            return {
                ...state,
                counter: state.counter + action.num
            };
        case 'Counter_Set':
            return {
                ...state,
                counter: action.num,
            };
        default:
            return state;
    }
}

export default myReducer;