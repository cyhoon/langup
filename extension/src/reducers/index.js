import { combineReducers } from 'redux';
import LoginReducer from './ReducerLogin';

const rootReducer = combineReducers({
    login: LoginReducer,
});

export default rootReducer;
