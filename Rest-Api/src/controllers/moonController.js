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

