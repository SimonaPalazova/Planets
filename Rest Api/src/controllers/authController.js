const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const { SECRET, TOKEN_KEY } = require('../config/untilConfig');
exports.register = async(req, res) => {
    try {

        const { username, email, password, repeatPassword } = req.body;
        const user = await User.findOne({username});

        if (user) {
            return res.status(409).send("User Already Exist. Please Login")
        }
        console.log('hi');
        const createdUser = await User.create({ username, email, password, repeatPassword });

        const token = await generationToken(createdUser);
        res.cookie(TOKEN_KEY, token);

        createdUser.token = token;
        res.status(201).json({ message: "Successfully Registered", status: 201 }).send(createdUser);
    } catch (err) {
        console.log(err);
    }

}
async function generationToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token
}

