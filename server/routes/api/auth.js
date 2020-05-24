const router = require('express').Router();
const UserModel = require('../../models/User');
const config = require("config");
const jwt =require('jsonwebtoken')
const auth = require('../../middleware/auth');
const User = require('../../models/User');

router.route('/')
  //@desc    authenticate user
  //@access  Public
  .post((req, res)=>{
    const { email, password} = req.body;
    UserModel.findOne({email})
      .then(user=>{
        UserModel.authenticate(password, user.password)
          .then(isMatch=>{
            if(!isMatch) return res.status(400).json({msg:'invalid password'})
            jwt.sign(
              {id:user.id},
              config.get('jwtSecret'),
              {expiresIn:3600},
              (err,token)=>{
                if(err) throw err;
                res.status(200).json({
                  token,
                  user:{
                    id:user.id,
                    email:user.email
                  }
                })
              }) 
            })
          .catch((err) => {
              
          })
      })
      .catch((err) => {
        return res.status(400).json({msg:'user does not exist'})  
      })

  })
  //@desc    Get user data
  //@access  Private
  .get(auth,(req,res)=>{
    User.findById(req.user.id)
      .select('-password')
      .then(user => res.json(user))
  })

module.exports = router;