import { combineReducers } from 'redux';
import game from './game';
import results from './results';

const rootReducer = combineReducers({
    game,
    results
});

export default rootReducer;