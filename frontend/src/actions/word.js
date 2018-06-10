import {
    MY_WORD_BOOK_LIST,
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
            console.log('데이터: ', response);
        }).catch((error) => {
            console.log('데이터를 못 가지고 왔을 때');
        });
    }
};
