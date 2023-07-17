const router = require('express').Router();
const { auth } = require('../utils/auth');
const { like } = require('../controllers/moonController');

// middleware that is specific to this router

router.put('/:moonId', auth, like);

module.exports = router