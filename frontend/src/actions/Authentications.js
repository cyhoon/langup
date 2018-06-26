import {
    IS_LOGIN_SUCCESS,
    IS_LOGIN_FAILURE,
    AUTH_LOGOUT_SUCCESS,
    AUTH_LOGOUT_FAILURE,
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE
} from './ActionTypes';

import axios from 'axios';

import { encryptionSha512 } from '../lib/crypto';
import { loginValidator, registerValidator } from '../lib/validation';
import storage from '../lib/storage';

const host = 'http://localhost:4000';

export function logout() {
    return (dispatch) => {
        try {
            storage.remove('token');
            storage.remove('user');

            dispatch(logoutSuccess('로그아웃 성공'));
        } catch (error) {
            dispatch(logoutFailure('로그아웃 실패'));
        }
    };
}

export function logoutSuccess(message) {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        message,
    };
}

export function logoutFailure(message) {
    return {
        type: AUTH_LOGOUT_FAILURE,
        message,
    };
}

export function isLogin() {
    return (dispatch) => {
        try {
            const token = storage.get('token');
            const user = storage.get('user');

            if (!token) { // 토큰이 없을 때
                dispatch(isLoginFailure('NOT_FOUND'));
            } else {
                dispatch(isLoginSuccess(token, user));
            }
        } catch (error) {
            dispatch(isLoginFailure('ERROR'));
        }
    };
}

export function isLoginSuccess(token, user) {
    return {
        type: IS_LOGIN_SUCCESS,
        token,
        user,
    };
}

export function isLoginFailure(message) {
    return {
        type: IS_LOGIN_FAILURE,
        message,
    };
}

export function signInRequest(email, password) {

    return (dispatch) => {
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
                    dispatch(signInFailure('계정을 찾을 수 없습니다'));
                    break;
                default:
                    dispatch(signInFailure('서버 오류'));
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

export function signUpRequest(email, password, name) {

    return (dispatch) => {
        dispatch(signUp());

        const validation = registerValidator(email, password, name);

        if (validation.status) {
            return new Promise((resolve, reject) => {
                return dispatch(signUpFailure(validation.message));
            });
        }

        const cypherText = encryptionSha512(password);

        const requestData = {
            email,
            password: cypherText,
            name
        };

        // server request.
        return axios.post(host + '/auth/local/signup', requestData)
        .then((response) => {
            const { status } = response.data;

            switch (status) {
                case 0: // 정상
                    dispatch(signUpSuccess(response.data.data));
                    break;
                case 10: // 요청 파라미터 에러
                    dispatch(signUpFailure('클라이언트 오류'));
                    break;
                case 30: // 이미 가입 되어 있을 때
                    dispatch(signUpFailure('이미 계정이 존재합니다'));
                    break;
                default:
                    dispatch(signUpFailure('서버 오류'));
                    break;
            }
        }).catch((error) => {
            dispatch(signUpFailure('서버 오류'));
        });
    }
};

export function signUp() {
    return {
        type: AUTH_REGISTER
    }
};

export function signUpSuccess(data) {
    const { token, refresh_token: refreshToken, user } = data;

    return {
        type: AUTH_REGISTER_SUCCESS,
        token,
        refreshToken,
        user
    };
};

export function signUpFailure(message) {
    return {
        type: AUTH_REGISTER_FAILURE,
        message,
    };
};