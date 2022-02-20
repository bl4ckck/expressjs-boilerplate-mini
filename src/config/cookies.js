require('dotenv').config();
const maxAgeCookie = 60 * 60 * 1000;

const cookieConfig = {
  path: '/',
  httpOnly: true,
  sameSite: 'none',
  secure: process.env.NODE_ENV === 'production',
  maxAge: maxAgeCookie,
  expires: new Date(Date.now() + maxAgeCookie),
};

module.exports = cookieConfig;
