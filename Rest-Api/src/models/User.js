const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Username should be at least 5 characters'],
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters and digits!`
        },
    },
   
    email: {
        type: String,
        required: [true, 'Email is required!'],
    },

    password: {
        type: String,
        required: true,
        minlength: [5, 'Password should be at least 5 characters'],
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters and digits!`
        },
    },
    planets:{
        type: mongoose.Types.ObjectId,
        ref: 'Planet'
    },
    moons:{
        type: mongoose.Types.ObjectId,
        ref: 'Planet'
    }
});

userSchema.virtual('repeatPasswor')
.set(function(value){
    if(this.password !== value){
        throw new Error('Password missmatch!')
    }
})

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash; 
});

const User = mongoose.model('User', userSchema);

module.exports = User;