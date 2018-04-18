import { combineReducers } from 'redux';
import LoginReducer from './ReducerLogin';
import SearchReducer from './ReducerSearch';
import MainReducer from './ReducerMain';

const rootReducer = combineReducers({
    login: LoginReducer,
    search: SearchReducer,
    main: MainReducer,
});

export default rootReducer;
