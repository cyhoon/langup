import {
    MY_WORD_BOOK_LIST,
    MY_WORD_BOOK_LIST_SUCCESS,
    MY_WORD_BOOK_LIST_FAILURE,
    MY_WORD_BOOK_SHOW_FAILURE,
    MY_WORD_BOOK_SHOW_SUCCESS,
} from './ActionTypes';

import axios from 'axios';
import { getKey } from '../lib/cookie';
import storage from '../lib/storage';

const HOST = 'http://localhost:4000';
let TOKEN = storage.get('token');
let HEADERS = { headers: { 'x-access-token': `${TOKEN}` } };

export function myWordListRequest() {
    return (dispatch) => {
        TOKEN = storage.get('token');
        HEADERS = { headers: { 'x-access-token': `${TOKEN}` } };
        return axios.get(HOST + '/user/me/vocabulary', HEADERS)
        .then((response) => {
            const { status } = response.data;

            switch (status) {
                case 0: // 정상
                    dispatch(myWordListSuccess(response.data.data));
                    break;
                default:
                    dispatch(myWordListFailure('서버 오류'));
                    break;
            }
        }).catch((error) => {
            dispatch(myWordListFailure('서버 오류'));
        });
    }
};

export function myWordListSuccess(list) {
    return {
        type: MY_WORD_BOOK_LIST_SUCCESS, 
        list,
    };
}

export function myWordListFailure(message) {
    return {
        type: MY_WORD_BOOK_LIST_FAILURE,
        message,
    };
}

export function myWordBookShowRequest(bookIdx) {
    return (dispatch) => {
        TOKEN = storage.get('token');
        HEADERS = { headers: { 'x-access-token': `${TOKEN}` } };
        return axios.get(HOST + `/user/me/vocabulary/${bookIdx}`, HEADERS)
        .then(response => {
            const { status } = response.data;

            switch (status) {
                case 0:
                    dispatch(myWordBookShowSuccess(response.data));
                    break;
                case 20: // 단어장을 볼 수 없을 때
                    dispatch(myWordBookShowFailure('단어장을 볼 수 없음'));
                    break;
                default:
                    dispatch(myWordBookShowFailure('서버 오류'));
                    break;
            }
        }).catch(error => {
            dispatch(myWordBookShowFailure('서버 오류'));
        });
    }
};

export function myWordBookShowSuccess(data) {
    return {
        type: MY_WORD_BOOK_SHOW_SUCCESS,
        ...data.data
    };
};

export function myWordBookShowFailure(message) {
    return {
        type: MY_WORD_BOOK_SHOW_FAILURE,
        message,
    };
}