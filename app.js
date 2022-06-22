const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 8080;

app.use(express.json());
const limiter = rateLimit({
	windowMs:  60 * 1000, // 1 minute
	max: 100, // Limit each IP to 100 requests per `window`
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { status: 'error', message: 'Too many requests' },
});
app.use(limiter);

app.get('/ping', (req, res) => {
  res.status(200).send('Ok');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
