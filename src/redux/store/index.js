import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storeReducer from '../reducers';
import questionReducer from '../reducers/questionsReducer';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = createStore(
        storeReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              )
            : applyMiddleware(sagaMiddleware),
    );
    // sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;