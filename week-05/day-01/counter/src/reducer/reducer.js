
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
            let tmp = [...state.tags];
            if (state.tags.indexOf(action.name) === -1) {
                tmp.push(action.name);
            }
            return {
                ...state,
                tags: tmp
            };
        case 'Remove_Tag':
            return {
                ...state,
                tags: [...state.tags].filter(tag => tag !== action.name)
            };
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
