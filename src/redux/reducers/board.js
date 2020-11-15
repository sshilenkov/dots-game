import { SET_RESULTS } from '../actions/board';

const initState = {
    results: []
}

const board = (state = initState, action) => {

    switch (action.type) {
        case SET_RESULTS:
            return { results: action.results };

        default:
            return { ...state };
    }
}

export default board;