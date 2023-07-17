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

