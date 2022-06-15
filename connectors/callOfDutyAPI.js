const API = require('call-of-duty-api');
require('dotenv').config();

const { ACT_SSO_COOKIE } = process.env; // get this from your cookie on web application and store in .env file
API.login(ACT_SSO_COOKIE);

module.exports = { API };
