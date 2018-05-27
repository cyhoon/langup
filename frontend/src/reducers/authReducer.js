import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
      status: 'INIT'
    },
    register: {
      status: 'INIT',
      error: -1
    },
    status: {
      isLoggedIn: false,
      token: null,
      refreshToken: null,
      user: null,
    }
};

const authReducer = (state, action) => {
    if (typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.AUTH_LOGIN_SUCCESS:
            return action;
        case types.AUTH_LOGIN_FAILURE:
            return state;
        case types.AUTH_REGISTER:
            return state;
        case types.AUTH_REGISTER_SUCCESS:
            return state;
        case types.AUTH_REGISTER_FAILURE:
            return state;
        default:
            return state;
    }
}

export default authReducer;