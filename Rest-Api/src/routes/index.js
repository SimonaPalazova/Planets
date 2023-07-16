const router = require('express').Router();

const { register, login, logout, getProfileInfo, editProfileInfo } = require('../controllers/authController');

router.post('/users/register',register);
router.post('/users/login',login);
router.post('/users/logout', logout);

router.get('/users/:id/profile', getProfileInfo);
//router.get('/:id/profile/edit');
router.post('/users/:id/profile/edit', editProfileInfo);

module.exports = router;
