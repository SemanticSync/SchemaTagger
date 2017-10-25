'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log('server up ::', port);
});
