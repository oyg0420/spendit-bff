const axios = require('axios');
const qs = require('qs');

process.env.API_PROTOCOL = 'https';
process.env.HOST = 'api.dev.spendit.kr';

const apiProtocol = process.env.API_PROTOCOL;
const apiHost = process.env.HOST;
const instance = axios.create({
  baseURL: `${apiProtocol}://${apiHost}`,
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      arrayFormat: 'brackets',
      encode: false,
    });
  },
  timeout: 10000,
});

// eslint-disable-next-line arrow-body-style
instance.interceptors.response.use((res) => {
  return res;
}, (err) => {
  console.error(err);
  return Promise.reject(err);
});

module.exports = instance;
