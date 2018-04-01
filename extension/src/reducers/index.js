import { combineReducers } from 'redux';
import LoginReducer from './ReducerLogin';
import SearchReducer from './ReducerSearch';

const rootReducer = combineReducers({
    login: LoginReducer,
    search: SearchReducer,
});

export default rootReducer;
