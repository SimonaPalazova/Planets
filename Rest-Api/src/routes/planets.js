const router = require('express').Router();
const { auth } = require('../utils/auth');
const { getPlanets, getPlanet, subscribe, editPlanet, deletePlanet} = require('../controllers/planetController');

// middleware that is specific to this router

router.get('/',getPlanets);

router.get('/:planetId', getPlanet);
router.put('/:planetId', auth, subscribe);
router.post('/:planetId/edit', auth, editPlanet);
router.delete('/:planetId/delete', auth, deletePlanet);

module.exports = router;