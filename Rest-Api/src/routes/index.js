const router = require('express').Router();

const { register, login, logout, getProfileInfo, editProfileInfo } = require('../controllers/authController');

router.post('/register',register);
router.post('/login',login);
router.post('/logout', logout);

router.get('/:id/profile', getProfileInfo);
//router.get('/:id/profile/edit');
router.post('/:id/profile/edit', editProfileInfo);

module.exports = router;
