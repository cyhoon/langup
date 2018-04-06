require('dotenv').config();

const { JWT_SECRET: secret } = process.env;

const jwt = require('jsonwebtoken');

exports.createToken = async (userEmail) => { // Create Token
  const payload = { userEmail };
  const option = { expiresIn: '7 days', issuer: 'langup.com', subject: 'token' };

  try {
    return await jwt.sign(payload, secret, option);
  } catch (error) {
    throw error;
  }
};

exports.createRefreshToken = async (userEmail) => { // Create Refresh Token
  const payload = { userEmail };
  const option = { expiresIn: '17 days', issuer: 'langup.com', subject: 'refreshToken' };

  try {
    return await jwt.sign(payload, secret, option);
  } catch (error) {
    throw error;
  }
};

exports.verifyToken = async (token) => { // Verify Token
  try {
    return await jwt.verify(token, secret);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
