const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const port  = process.env.PORT || 8080;

require('./db')

const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

//api route to 
app.use('/api/movies',require('./routes/api/movies'))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
//deployment for production 
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, './client/build')));

  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './client/build/index.html'))
  })
}

app.listen(port,()=>console.log(`listening on ${port}`))

