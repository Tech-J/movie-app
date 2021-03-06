const mongoose = require('mongoose');
const config = require("config")
const  uri  = process.env.dbURL || config.get("mongoURI");

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const { connection } = mongoose;

connection.once('open', () => console.log('Mongodb connection live'));
connection.on('error',()=> console.log( 'connection error:'));

module.exports = connection;
