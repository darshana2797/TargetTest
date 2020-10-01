import {combineReducers} from 'redux';
import questionsReducer from './questionsReducers';

//multiple reducers can be combined as per the requirements
export default combineReducers({
    data : questionsReducer
})