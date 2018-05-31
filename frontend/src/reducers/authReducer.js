import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
      status: 'INIT',
      messageOn: false,
      message: null,
    },
    register: {
      status: 'INIT',
      messageOn: false,
      message: null,
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
                    status: { $set: 'WAITING' },
                }
            });
        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' },
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' },
                    messageOn: { $set: true },
                    message: { $set: action.message },
                }
            });
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