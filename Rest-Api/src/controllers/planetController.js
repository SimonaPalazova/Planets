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
        const planet = await Planet.findById(planetId)
            .populate({
                path: 'posts',
                path: 'planets',
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

exports.createPlanet = async (req, res, next) => {
    const { name, image, PlanetType, overview } = req.body;
    const userId = req.user._id;
    try {
        const createdPlanet = await Planet.create({ name, image, PlanetType, overview, subscribers: [userId] })
        res.status(201).json({ message: "Created!" })
        res.json(createdPlanet);
    } catch (err) {
        console.log(err);
        next();
    }

}
exports.editPlanet = async(req, res, next) => {
    const planetId = req.params.planetId
    const { name, image, PlanetType, overview } = req.body;
    const userId = req.user._id;
    // if the userId is not the same as this one of the post, the post will not be updated
    try{
        const editedPlanet = await Planet.findOneAndUpdate({ _id: planetId, userId }, { name, image, PlanetType, overview }, { new: true }) 
        if (editedPlanet) {
                res.status(200).json(editedPlanet);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
    }catch (err) {
        console.log(err);
        next();
    }
}


exports.subscribe = async (req, res, next) => {
    const planetId = req.params.planetId;
    const userId = req.user._id;
    try {
       const subscribe = await Planet.findByIdAndUpdate({ _id: planetId }, { $addToSet: { subscribers: userId } }, { new: true })
        res.status(200).json(subscribe)
            
    } catch (err) {
        console.log(err);
        next();
    }

}