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

exports.getPlanet = async (req, res, next) => {
    const planetId = req.params.planetId;
    try {
        const planet = await Planet.findById(themeId)
            .populate({
                path: 'posts',
                populate: {
                    path: 'userId'
                }
            })
        res.json(planet);
    } catch (err) {
        console.log(err);
        next();
    }

}
