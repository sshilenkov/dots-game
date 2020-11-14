import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddlware from 'redux-saga';

import { sagaWatcher } from '../sagas'

const sagaMiddleware = createSagaMiddlware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaWatcher);

export default store;