const { app } = require('./app');

exports.handler = async () => {
  const response = await app();
  return response;
};