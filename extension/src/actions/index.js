import axios from 'axios';

export const LOGIN = 'LOGIN'; // 액션
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
