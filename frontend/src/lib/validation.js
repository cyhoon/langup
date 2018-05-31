import validator from 'validator';

export const loginValidator = (email, pw) => {
    const isEmail = validator.isEmail(email);

    if (!isEmail) { // 이메일이 아니 라면
        return {
            status: true,
            message: '이메일 형식으로 입력 해 주세요',
        };
    }

    return { status: false };
}

export const registerValidator = (email, pw, name) => {
    const isEmail = validator.isEmail(email);

    if (!isEmail) {
        return {
            status: true,
            message: '이메일 형식으로 입력 해 주세요',
        };
    }

    if (pw.length === 0) {
        return {
            status: true,
            message: '비밀번호를 입력 해 주세요',
        };
    }

    if (name.length === 0) {
        return {
            status: true,
            message: '이름을 입력 해 주세요',
        };
    }

    return { status: false };
}