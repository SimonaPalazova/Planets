const router = require('express').Router();
const { auth } = require('../utils/auth');

const { register, login, logout, getProfileInfo, editProfileInfo } = require('../controllers/authController');

router.post('/register',register);
router.post('/login',login);
router.post('/logout', logout);


router.post('/:id/profile', auth, getProfileInfo);
router.put('/:id/profile/edit', auth, editProfileInfo);

module.exports = router;