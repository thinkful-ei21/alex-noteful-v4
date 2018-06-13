const express = require('express')
const router = express.Router();
const passport = require('passport');
const options = {session: false, failWithError: true};
const localAuth = passport.authenticate('local', options);

// Protect endpoints using JWT Strategy
//router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));

router.post('/login', localAuth, (req, res) => {
    // const authToken = createAuthToken(req.user);
    res.json(req.user);
  });

// function createAuthToken (user) {
//     return jwt.sign({ user }, JWT_SECRET, {
//       subject: user.username,
//       expiresIn: JWT_EXPIRY
//     });
//   }

module.exports = router;