import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE
} from './ActionTypes';

import axios from 'axios';

const host = 'http://localhost:4000';

export function signInRequest(email, password) {

    return (dispatch) => {
        // return {
        //     type: AUTH_LOGIN
        // };
        dispatch(signIn());

        return axios.post(host + '/auth/local/signin', { email, password })
        .then((response) => {
            console.log('response ', response);
            return {
                type: 'success'
            }
        }).catch((error) => {
            console.log('error ', error);
            return {
                type: 'fail'
            }
        });
    }
};

export function signIn() {
    return {
        type: AUTH_LOGIN
    };
};

export function signInSuccess(user, token) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        user,
        token
    };
};

export function signInFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    }
};