const { Planet } = require('../models');

exports.getPlanets = async (req, res, next) => {
    try {
        const planets = await Planet.find().populate('userId')
        res.json(planets)
    } catch (err) {
        console.log(err);
        next();
    }

}
