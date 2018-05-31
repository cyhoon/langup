import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE
} from './ActionTypes';

import axios from 'axios';

import { encryptionSha512 } from '../lib/crypto';
import { loginValidator } from '../lib/validation';

const host = 'http://localhost:4000';

export function signInRequest(email, password) {

    return (dispatch) => {
        // return {
        //     type: AUTH_LOGIN
        // };
        dispatch(signIn());

        const validation = loginValidator(email, password);

        if (validation.status) {
            return new Promise((resolve, reject) => {
                return dispatch(signInFailure(validation.message));
            });
        }

        const cypherText = encryptionSha512(password);

        return axios.post(host + '/auth/local/signin', { email, password: cypherText })
        .then((response) => {
            const { status } = response.data; 

            switch (status) {
                case 0: // 정상
                    dispatch(signInSuccess(response.data.data));
                    break;
                case 10: // 요청 파라미터 에러
                case 20: // 계정을 찾을 수 없을 때
                    dispatch(signInFailure('계정을 찾을 수 없습니다.'));
                    break;
            }
            // dispatch(signInSuccess(response));
        }).catch((error) => {
            dispatch(signInFailure('서버 오류'));
        });
    }
};

export function signIn() {
    return {
        type: AUTH_LOGIN,
        loading: true,
    };
};

export function signInSuccess(data) {
    const { token, refresh_token: refreshToken, user } = data;

    return {
        type: AUTH_LOGIN_SUCCESS,
        loading: false,
        token,
        refreshToken,
        user,
    };
};

export function signInFailure(message) {
    return {
        type: AUTH_LOGIN_FAILURE,
        message,
    };
};