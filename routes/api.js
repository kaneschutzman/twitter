'use strict';

var express = require('express');
var router = express.Router();

var User = require('../lib/model/user');

var tweets = require('./tweets');

/**
 * Fetch the user by ID. If the user exists, the user data will be passed to
 * res.send() to be serialized. If the user doesn't exist, it responds with a
 * 404 Not Found code.
 */
router.get('/user/:id', function(req, res, next) {
  User.get(req.params.id, function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user.id) {
      return res.send(404);
    }
    res.json(user);
  });
});

router.use('/tweets', tweets);

module.exports = router;
