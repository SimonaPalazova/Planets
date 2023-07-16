const mongoose = require('mongoose');

const moonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true],
    },
    image:{
        type: String,
        required: [true],
      
    },
    overview:{
        type: String,
        required: [true],
    },
   
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    like:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
    
});
const Moon = mongoose.model('Moon', moonSchema);
module.exports = Moon;
