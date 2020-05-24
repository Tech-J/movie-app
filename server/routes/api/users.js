const router = require('express').Router();
const UserModel = require('../../models/User');
const config = require("config");
const jwtSecret = process.env.jwtSecret || config.get('jwtSecret')
const jwt = require('jsonwebtoken')

router.route('/')
  .post((req, res) => {

    if( !req.body.email || !req.body.password) return  res.status(400).json({msg:"enter all fields"})

    const User = new UserModel(req.body);
    User.save()
      .then(user => {
        jwt.sign(
          { id: user.id },
          jwtSecret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
              user: {
                id: user.id,
                email: user.email
              }
            })
          }
        )
      })
      .catch(err => res.status(400).json({ "error": err }))
  })


module.exports = router;