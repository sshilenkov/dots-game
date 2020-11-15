import axios from 'axios';
import { put, select, takeEvery } from 'redux-saga/effects';
import { GET_GAME_CONFIG, setGameConfig, GAME_OVER } from '../actions/game';
import { GET_RESULTS, setResults } from '../actions/board';

export function* sagaWatcher() {
    yield takeEvery(GET_GAME_CONFIG, gameWorker);
    yield takeEvery(GAME_OVER, gameOver);
    yield takeEvery(GET_RESULTS, boardWorker);
}

function* gameWorker() {
    const { mode, userName } = yield select(store => store.game);
    const difficult = yield axios.get('https://starnavi-frontend-test-task.herokuapp.com/game-settings');
    yield put(setGameConfig(difficult.data[mode], userName));
}

function* gameOver() {
    const { winner } = yield select(store => store.game);

    if (winner !== 'Nobody') {
        const date = new Date();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const dateAndTime = `${hours}:${minutes}; ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
        
        yield axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', {
            "winner": winner,
            "date": dateAndTime
        });
    }

    yield boardWorker();
}

function* boardWorker() {
    const boardData = yield axios.get('https://starnavi-frontend-test-task.herokuapp.com/winners');
    yield put(setResults(boardData.data));
}