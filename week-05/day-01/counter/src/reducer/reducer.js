
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
        case 'Add_Tag':
            if (state.tags.indexOf(action.name) === -1) {
                state.tags.push(action.name);
            }
            return state;
        case 'Remove_Tag':
            let index = state.tags.indexOf(action.name);
            if (index) {
                state.tags.splice(index,1);
            }
            return state;
        case 'Clean_Tag':
            return {
                ...state,
                tags: []
            };
        default:
            return state;
    }
}

export default myReducer;