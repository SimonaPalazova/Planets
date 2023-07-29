const router = require('express').Router();
const { auth } = require('../utils/auth');

const { register, login, logout, getProfileInfo, editProfileInfo } = require('../controllers/authController');
const { getMoonsByOwner } = require('../controllers/moonController');
const { getPlanetsByOwner } = require('../controllers/planetController');


router.post('/register',register);
router.post('/login',login);
router.post('/logout', logout);


router.get('/:id/profile', auth, getProfileInfo, getMoonsByOwner, getPlanetsByOwner);
router.put('/:id/profile/edit', auth, editProfileInfo);

module.exports = router;