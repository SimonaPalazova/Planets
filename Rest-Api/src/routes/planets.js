const router = require('express').Router();
const { auth } = require('../utils/auth');
const { getPlanets, getPlanet, editPlanet, deletePlanet, getPlanetsByOwner} = require('../controllers/planetController');

// middleware that is specific to this router

router.get('/',getPlanets);

router.get('/:userId/planets', auth , getPlanetsByOwner);

router.get('/:planetId', getPlanet);
router.post('/:planetId/edit', auth, editPlanet);
router.delete('/:planetId/delete', auth, deletePlanet);

module.exports = router;