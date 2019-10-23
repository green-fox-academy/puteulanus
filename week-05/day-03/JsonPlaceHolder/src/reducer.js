
const initState = {
    loading: false,
    users: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {...state, users: action.users};
        default:
            return state;
    }
}

const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

function fetchData() {
    return async (dispatch) => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        dispatch(fetchDataSuccess(users.map(({name}) => name)));
    }
}

function fetchDataSuccess(users) {
    return {type: FETCH_DATA_SUCCESS, users};
}

export { fetchData }