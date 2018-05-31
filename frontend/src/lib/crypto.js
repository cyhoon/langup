import crypto from 'crypto';

export const encryptionSha512 = (plainText) => {
    return crypto.createHash('sha512').update(plainText).digest('hex');
};