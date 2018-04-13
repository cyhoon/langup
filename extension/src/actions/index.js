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

export async function search(content) {

    // 비동기는 따로 개인 사용자 모듈이 있어야함
    // readux-thunk 사용..

    // 서버로 보내주는 작업 처리
    const url = `${baseUrl}/search/${content}`;

    // axios.get(url, {
    //     headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJqZWZmQGdtYWlsLmNvbSIsImlhdCI6MTUyMzUwNDA2MSwiZXhwIjoxNTI0MTA4ODYxLCJpc3MiOiJsYW5ndXAuY29tIiwic3ViIjoidG9rZW4ifQ.Z7LbO4s8nHcSg3SwL9dJfCcILn0YP6cX70I8w57OuAg' }
    // }).then((res) => {
    //     // Rest 직렬화 시키면됨.

    //     console.log(`JSON: ${JSON.stringify(res)}`);

    //     return {
    //         type: SEARCH,
    //         payload: {
    //             word: content,
    //             means: [
    //                 {
    //                     idx: 1,
    //                     content: '안녕'
    //                 },
    //                 {
    //                     idx: 2,
    //                     content: 'ㅋㅋㅋ'
    //                 },
    //                 {
    //                     idx: 3,
    //                     content: 'ㅎㅅㅎ'
    //                 }
    //             ]
    //         }
    //     };
    // }).catch((err) => {
    //     console.log(`error ${err}`);
    //     return {
    //         type: SEARCH,
    //         payload: {
    //             word: content,
    //             means: [
    //             ]
    //         }
    //     };
    // });

    // console.log('search action 실행');

    // return {
    //     type: SEARCH,
    //     payload: { // MOCK UP DATA
    //         word: content,
    //         means: [
    //             {
    //                 idx: 1,
    //                 content: '안녕'
    //             },
    //             {
    //                 idx: 2,
    //                 content: 'ㅋㅋㅋ'
    //             },
    //             {
    //                 idx: 3,
    //                 content: 'ㅎㅅㅎ'
    //             }
    //         ]
    //     }
    // };

    const data = await axios.get(url, {headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJqZWZmQGdtYWlsLmNvbSIsImlhdCI6MTUyMzUwNDA2MSwiZXhwIjoxNTI0MTA4ODYxLCJpc3MiOiJsYW5ndXAuY29tIiwic3ViIjoidG9rZW4ifQ.Z7LbO4s8nHcSg3SwL9dJfCcILn0YP6cX70I8w57OuAg' }});

    console.log(`data: ${JSON.stringify(data.data.data)}`);

    const returnData = {
        type: SEARCH,
        payload: { // MOCK UP DATA
            word: content,
            means: data.data.data.mean_dictionary
        }
    }

    return returnData;
}