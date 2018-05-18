import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE
} from './ActionTypes';

import axios from 'axios';

const signInRequest = (userEmail, userPassword) => {
    return 'SIGN IN REQUEST';
};

const signIn = () => {
    return {
        type: AUTH_LOGIN
    };
};

const signInSuccess = (user, token) => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        user,
        token
    };
};

const signInFailure = () => {
    return {
        type: AUTH_LOGIN_FAILURE
    }
};

export const signInRequest;
export const signIn;
export const signInSuccess;
export const signInFailure;