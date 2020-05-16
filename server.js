const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const { port } = require('./config/config');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

//api route to 
app.use('/api/movies',require('./routes/movies'))

//deployment for production 
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, './client/build')));

  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './client/build/'))
  })
}

app.listen(port,()=>console.log(`listening on ${port}`))

