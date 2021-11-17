'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const { httpError } = require('./utils/errors');
const authRoute = require('./routes/authRoute');
const passport = require('./utils/pass');

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('./uploads/'));

app.use(passport.initialize());
app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);

app.use((req, res, next) => {
    const err = httpError('Not found', 404);
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'internal server error',
    });
  });
  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
