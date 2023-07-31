const router = require('express').Router();
const { auth } = require('../utils/auth');

const { register, login, logout, getProfileInfo, editProfileInfo } = require('../controllers/authController');

router.post('/register',register);
router.post('/login',login);
router.post('/logout', auth ,logout);


router.get('/profile', auth, getProfileInfo);
router.post('/profile/edit', auth, editProfileInfo);

module.exports = router;