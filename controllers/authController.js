'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');

const login = (req, res) => {
  // TODO: add passport authenticate
  passport.authenticate('local',
  { session: false}, (err, user, info) => {
      console.log('login info', info);
      if(err || !user){
          next(httpError('login error', 400));
          return;
      }
      req.login(user, { session: false }, (err) =>{
        if(err || !user){
            next(httpError('login error', 400));
            return;
        }
        const token = jwt.sign(user, 'g768b8v765');
        return res.json({user, token});
      });
  })(req, res, next);
};

module.exports = {
  login,
};