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
exports.editMoon = async(req, res, next) => {
    const moondId = req.params.moondId
    const { name, image, overview } = req.body;
    const userId = req.user._id;
    // if the userId is not the same as this one of the Moon, the Moon will not be updated
    try{
        const editedMoon = await Moon.findOneAndUpdate({ _id: moondId, userId }, { name, image, MoonType, overview }, { new: true }) 
        if (editedMoon) {
                res.status(200).json(editedMoon);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
    }catch (err) {
        console.log(err);
        next();
    }
}

