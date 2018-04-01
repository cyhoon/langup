/**
 * Module dependencies
 */

import axios from 'axios';

/**
 * Define action name.
 */

export const LOGIN = 'LOGIN';
export const SEARCH = 'SEARCH';
const baseUrl = 'http://localhost:4000';

export function login(id, pw) {
    // 서버로 보내주는 작업 처리
    const url = baseUrl + '/auth/signin';

    axios.post(url, {
        id,
        pw
    }).then((res) => {
        // 결과를 보고 로그인에 성공했다면 chrome.extension.storge에 저장.

        const token = id + pw;
        console.log('token : ', token);
        localStorage.token = token;
        console.log('localStorage : ', localStorage);

        // 페이지 리로드
        window.location.reload()
    }).catch((err) => {
        return;
    });

    return {
        type: LOGIN,
        payload: {
            id,
            pw
        }
    };
}

export function search(content) {

    // 비동기는 따로 개인 사용자 모듈이 있어야함
    // readux-thunk 사용..

    // 서버로 보내주는 작업 처리
    // const url = baseUrl + '/search/';

    // axios.post(url, {
    //     content
    // }).then((res) => {
    //     // Rest 직렬화 시키면됨.
    //     return {
    //         type: SEARCH,
    //         payload: {
    //             status: 200,
    //             message: '성공',
    //             content,
    //             means: res.means
    //         }
    //     };
    // }).catch((err) => {
    //     console.log(`error ${err}`);
    //     return {
    //         type: SEARCH,
    //         payload: {
    //             status: 500,
    //             message: '에러',
    //         }
    //     };
    // });

    console.log('search action 실행');

    return {
        type: SEARCH,
        payload: { // MOCK UP DATA
            word: content,
            means: [
                {
                    idx: 1,
                    content: '안녕'
                },
                {
                    idx: 2,
                    content: 'ㅋㅋㅋ'
                }
            ]
        }
    };
}