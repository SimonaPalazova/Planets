const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const { SECRET, TOKEN_KEY } = require('../config/untilConfig');

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    //find user by username
    const user = await User.findOne({ username });
    //check password
    const isValid = await bcrypt.compare(password, user.password);
    try {

        if (!user || !isValid) {
            throw new Error
        }
        
        const token = await generationToken(user);
        res.cookie(TOKEN_KEY, token);

        user.token = token;
        res.status(200).json({ message: "Successful login", user }).send(user)

    } catch (err) {
        if (!user || !isValid) {
            res.status(401).send({ message: "Invalid username or password!" });
            return;
        }
        next(err)
    }

};

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



exports.logout = (req, res) => {
    try {
        res.clearCookie(TOKEN_KEY).json({ message: "Successful logout"});
    } catch (err) {
        res.send(err);
    }


}

exports.getProfileInfo = async(req, res, next) => {
    const userid = req.params._id;
    try{
         const user = await User.findOne(userid, { password: 0, __v: 0 }) //finding by Id and returning without password and __v
         res.status(200).json(user) 
        }catch(err){
            console.log(err);
            next()
        }
}

exports.editProfileInfo = async(req, res, next) => {
    const userid = req.params._id;
    const { username, email } = req.body;
    try{
         const editedProfile = await User.findOneAndUpdate( userid, { username, email },  { runValidators: true, new: true })
         res.status(200).json(editedProfile)
    }catch(err){
        console.log(err);
        next()
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

