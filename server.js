const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const axios = require('axios');
const { port, tmDB } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));



app.listen(port,()=>console.log(`listening on ${port}`))

