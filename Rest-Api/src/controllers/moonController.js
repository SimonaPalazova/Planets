const  User  = require('../models/User');
const  Moon  = require('../models/Moon');

exports.getMoons = async (req, res, next) => {
    try {
        const moons = await Moon.find().populate('owner')
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
                    path: 'owner'
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
        const createdMoon = await Moon.create({name, image, overview, owner: userId})
        res.status(201).json({ message: "Created!", createdMoon});
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

exports.deleteMoon= async(req, res, next) => {
    const moondId = req.params.moondId
    const userId = req.user._id;

    try{
        const deletedMoon = await Moon.findOneAndDelete({ _id: moondId, userId })
        const udate = await User.findOneAndUpdate({ _id: userId }, { $pull: { Moons: moondId } })

            if (deletedMoon) {
                res.status(200).json(deletedMoon)
                res.json(udate);
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        
    }catch (err) {
        console.log(err);
        next();
    }
    
}
 
exports.getMoonsByOwner = async(req, res,next) => {
    const userId = req.user._id;
    
    try{
        const moons = await Moon.find({owner: userId})
        res.json(moons)

    }catch (err) {
        console.log(err);
        next();
    }
}

