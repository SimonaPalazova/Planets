const router = require('express').Router();

const { register, login, logout, getProfileInfo } = require('../controllers/authController');

router.post('/register',register);
router.post('/login',login);
router.post('/logout', logout);
router.get('/:id/profile', getProfileInfo)

module.exports = router;
