const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');


//route for user to create an account
router.post('/user', 
  userController.createUser, 
  userController.getUserInfo,
  sessionController.startSession, 
  cookieController.setSIDCookie, 
  (req, res) => {
    if (res.locals.sid) {
      res
        .status(200)
        .send(res.locals.userObject); // send user info
    } else {
      res
        .status(401)
        .send({ error: 'incorrect username or password' });
    }
  }
);

// router.get('/logout', sessionController.endSession, (req, res) => {
// })

module.exports = router;