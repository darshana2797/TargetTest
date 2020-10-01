import {FETCH_QUESTIONS, 
    FETCH_QUESTIONS_SUCCESS, 
    FETCH_QUESTIONS_FAILED, 
    MARK_THE_ANSWER,
    FETCH_NEXT,
    RETAKE_TEST,
    SET_SELECTED_VALUE 
} from '../constants';

export const fetchQuestions = (response) => {
    return{
        type:FETCH_QUESTIONS,
        response
    }
}

export const fetchQuestionsSuccess = (response) => {
    return{
        type:FETCH_QUESTIONS_SUCCESS,
        response
    }
}

export const fetchQuestionsFailed = (response) => {
    return{
        type:FETCH_QUESTIONS_FAILED,
        response
    }
}

export const markTheAnswer = (index, answer) => {
    return{
        type:MARK_THE_ANSWER,
        index,
        answer
    }
}

export const fetchNext = () => {
    return{
        type:FETCH_NEXT,
    }
}

export const retakeTest = () => {
    return{
        type:RETAKE_TEST,
    }
}
export const setSelectedValue = (index, value) => {
    console.log('************', value)
    return{
        type: SET_SELECTED_VALUE,
        index,
        value
    }
}
