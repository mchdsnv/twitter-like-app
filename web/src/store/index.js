import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {requestsPromiseMiddleware} from 'redux-saga-requests';

import authReducer from './auth/auth-reducer';
import feedReducer from './feed/feed-reducer';

import axiosMiddleware from './middlewares/axios-middleware';
import authMiddleware from './middlewares/auth-middleware';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        auth: authReducer,
        feed : feedReducer,
    }),
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            authMiddleware,
            axiosMiddleware,
            sagaMiddleware,
            loggerMiddleware,
            requestsPromiseMiddleware(),
        )
    ),
);

sagaMiddleware.run(rootSaga);