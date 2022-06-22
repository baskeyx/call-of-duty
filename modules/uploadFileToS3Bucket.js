const AWS = require('aws-sdk');
require('dotenv').config();

const { AWSS3KEY, AWSS3SECRET, AWSS3BUCKET } = process.env;

const s3 = new AWS.S3({
  accessKeyId: AWSS3KEY,
  secretAccessKey: AWSS3SECRET,
});

const uploadFileToS3Bucket = async (file, filename) => {
  const params = {
      Bucket: AWSS3BUCKET,
      Key: `public/${filename}`,
      Body: JSON.stringify(file, null, 2)
  };
  s3.upload(params, function(s3Err, data) {
      if (s3Err) throw s3Err
      console.log(`File uploaded successfully at ${data.Location}`)
  });
};

module.exports = uploadFileToS3Bucket;
