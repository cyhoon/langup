import {
    MY_WORD_BOOK_LIST,
    MY_WORD_BOOK_LIST_SUCCESS,
    MY_WORD_BOOK_LIST_FAILURE,
} from './ActionTypes';

import axios from 'axios';
import { getKey } from '../lib/cookie';

const host = 'http://localhost:4000';

export function myWordListRequest() {
    return (dispatch) => {
        const token = getKey('token');
        const headers = { headers: { 'x-access-token': `${token}` } };

        return axios.get(host + '/user/me/vocabulary', headers)
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