const { app } = require('./app');

exports.handler = async (event) => {
  // TODO implement
  // const response = {
  //     statusCode: 200,
  //     body: JSON.stringify('Hello from Lambda!'),
  // };
  const response = await app();
  return response;
};
