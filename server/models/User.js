const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

UserSchema.pre('save', function(next){
  let user = this
  bcrypt.hash(user.password, 10, function(err, hash) {
    user.password = hash;
    next();
  });
})

UserSchema.statics.authenticate = function(enteredPwd,userPwd,cb){
  return bcrypt.compare(enteredPwd, userPwd)
}

module.exports = model("User", UserSchema);
