'use strict';
// userRoute

const express = require('express');
const { user_get, user_list_get, user_post } = require('../controllers/userController');
const router = express.Router();


router.get('/', user_list_get);
  
router.get('/:id', user_get);

router.get('/', user_post);

  router.get('/:id', (req, res) => {
    res.send('You requested a users whose id is ' + req.params.id);
  });
  
  
  router.post('/', (req, res) => {
    res.send('From this endpoint you can get cats.');
  });
  
  router.put('/', (req, res) => {
    res.send('From this endpoint you can get cats.');
  });
  
  router.delete('/', (req, res) => {
    res.send('From this endpoint you can get cats.');
  });


  module.exports = router;
