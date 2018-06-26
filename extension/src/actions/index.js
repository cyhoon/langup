/**
 * @description
 * Module dependencies
 */

import axios from 'axios';
import { encryptionSha512 } from '../lib/crypto';

/**
 * @description
 * Define action name.
 */

export const LOGIN = 'LOGIN';
export const SEARCH = 'SEARCH';
export const IS_MAIN = 'IS_MAIN'; // main container show/hide 처리


/**
 * @description
 * baseUrl: 서버로 요청하는 호스트
 */
const baseUrl = 'http://localhost:4000';
let xAcccessToken;
chrome.storage.sync.get(['token'], (value) => {
    if (!value) return;
    xAcccessToken = value.token;
});

/**
 * @function
 * @param {boolean} visible
 * MainContainer 보여저야할지 결정 ( show: true, hide: false )
 */
export function isMain(visible) {
    let mainContainer = visible;
    return {
        type: IS_MAIN,
        payload: {
            mainContainer
        }
    }
}

export function login(email, password) {
    // 서버로 보내주는 작업 처리
    const url = baseUrl + '/auth/local/signin';

    const cypherText = encryptionSha512(password);

    axios.post(url, {
        email,
        password: cypherText,
    }).then((res) => {
        // 결과를 보고 로그인에 성공했다면 chrome.extension.storge에 저장.
        const { status } = res.data;

        if (status === 10 || status === 20) {
            console.log('로그인 실패');
            return;
        }

        const { token, refresh_token, user } = res.data.data;

        chrome.storage.sync.set({token: token}, function() {
            window.location.reload(); // 페이지 리로드
        });
        // localStorage.token = token;
        // window.location.reload(); // 페이지 리로드
    }).catch((err) => {
        return;
    });

    return {
        type: LOGIN,
        payload: {
            email,
            password,
        }
    };
}

export async function search(content) {

    // 비동기는 따로 개인 사용자 모듈이 있어야함
    // readux-thunk 사용..

    // 서버로 보내주는 작업 처리
    const url = `${baseUrl}/search/${content}`;
    const data = await axios.get(url, {headers: {'x-access-token': `${xAcccessToken}` }});

    console.log(`data: ${JSON.stringify(data.data.data)}`);

    let mean_dictionary = [];

    try {
        mean_dictionary = data.data.data.mean_dictionary;
    } catch (err) { } // mean_dictionary가 없는 경우

    const returnData = {
        type: SEARCH,
        payload: { // MOCK UP DATA
            word: content,
            means: mean_dictionary
        }
    }

    return returnData;
}
