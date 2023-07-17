const router = require('express').Router();

const users = require('./users');
const planets = require('./planets');
const moons = require('./moons');
const likes = require('./like');
const test = require('./test');
const create = require('./create')


router.use('/users', users);
router.use('/create', create)
router.use('/planets', planets);
router.use('/moons', moons);
router.use('/likes', likes);
router.use('/test', test);


module.exports = router;
