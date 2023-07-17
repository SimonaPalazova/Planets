const { Moon } = require('../models/Moon');

exports.getMoons = async (req, res, next) => {
    try {
        const moons = await Moon.find().populate('userId')
        res.json(moons)
    } catch (err) {
        console.log(err);
        next();
    }

}

exports.getMoon = async (req, res, next) => {
    const moondId = req.params.moondId;
    try {
        const moon = await Moon.findById(moondId)
            .populate({
                path: 'moons',
                populate: {
                    path: 'userId'
                }
            })
        res.json(moon);
    } catch (err) {
        console.log(err);
        next();
    }

}

exports.createMoon = async (req, res, next) => {
    const { name, image, overview } = req.body;
    const userId = req.user._id;
    
    try {
        const createdMoon = await Moon.create( name, image, overview, {subscribers: [userId]} )
        res.status(201).json({ message: "Created!" })
        res.json(createdMoon);
    } catch (err) {
        console.log(err);
        next();
    }

}
