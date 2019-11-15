import Questions from '../../constants/Questions';
import { strict } from 'assert';

const initialState = {
    questions: [{
        'title': String,
        'answers': [{
            'attrbiute': String
        }],
    }],
}
function questionsReducer(state = {}, action){
    switch(action.type) {
        case Questions.ADD_QUESTION:
            state['questions'] = action.payload
        return state;
        // case Questions.DELETE_QUESTION:
        //     state['']
        default:
            return state;
    }
}

export default questionsReducer;
