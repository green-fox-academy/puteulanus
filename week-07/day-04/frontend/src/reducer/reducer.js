
const initState = {
    postList: []
};

export default function (state=initState, action) {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {...state, postList: action.data};
        default:
            return state;
    }
}