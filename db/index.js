const mongoose = require('mongoose');
const config = require("config")
const  uri  = config.get("mongoURI") || process.env.dbURL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const { connection } = mongoose;

connection.once('open', () => console.log('Mongodb connection live'));
connection.on('error',()=> console.log( 'connection error:'));

module.exports = connection;
