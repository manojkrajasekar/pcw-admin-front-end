import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';

const storeReducer = combineReducers({
    questions: questionsReducer
})

export default storeReducer;