import Questions from '../../constants/Questions';

const addQuestion = payload => ({
    type: Questions.ADD_QUESTION,
    payload
});

const deleteQuestion = payload => ({
    type: Questions.DELETE_QUESTION,
    payload
})

export {
    addQuestion,
    deleteQuestion
};