import axios from 'axios';
import { put, select, takeEvery } from 'redux-saga/effects';
import { GET_GAME_CONFIG, setGameConfig } from '../actions/game';

export function* sagaWatcher() {
    yield takeEvery(GET_GAME_CONFIG, gameWorker);
}

function* gameWorker() {
    const { mode, userName } = yield select(store => store.game);
    const difficult = yield axios.get('https://starnavi-frontend-test-task.herokuapp.com/game-settings');
    yield put(setGameConfig(difficult.data[mode], userName));
}