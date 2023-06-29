const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const router = require('./routes')


const { notFound, errorHandler } = require('./api/middlewares');

require('dotenv').config();

const db = require('./db/connection');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(router)
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});