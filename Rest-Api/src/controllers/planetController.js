const Planet  = require('../models/Planet');
const User  = require('../models/User');

exports.getPlanets = async (req, res, next) => {
    try {
        const planets = await Planet.find().populate('owner')
        res.json(planets)
    } catch (err) {
        console.log(err);
        next();
    }

}

exports.getPlanet = async (req, res, next) => {
    const planetId = req.params.planetId;
    try {
        const planet = await Planet.findById(planetId)
            .populate({
                path: 'planets',
                populate: {
                    path: 'owner'
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

exports.deletePlanet= async(req, res, next) => {
    const planetId = req.params.planetId
    const userId = req.user._id;

    try{
        const deletedPlanet = await Planet.findOneAndDelete({ _id: planetId, userId })
        const udate = await User.findOneAndUpdate({ _id: userId }, { $pull: { planets: planetId } })

            if (deletedPlanet) {
                res.status(200).json(deletedPlanet)
                res.json(udate);
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        
    }catch (err) {
        console.log(err);
        next();
    }
    
}

exports.getPlanetsByOwner = async(req, res,next) => {
    const userId = req.user._id;
    
    try{
        const planets = await Moon.find({owner: userId})
        res.json(planets)

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