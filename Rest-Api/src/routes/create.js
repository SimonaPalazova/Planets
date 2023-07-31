const router = require('express').Router();
const { auth } = require('../utils/auth');
const { createPlanet } = require('../controllers/planetController');
const { createMoon } = require('../controllers/moonController');

router.post('/moon', auth, createMoon);
router.post('/planet', auth,createPlanet);

module.exports = router;