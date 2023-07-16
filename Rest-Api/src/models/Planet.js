const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true],
    },
    image:{
        type: String,
        required: [true],
      
    },
    planetType:{
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
    subscribe:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
    
});
const Planet = mongoose.model('Planet', planetSchema);
module.exports = Planet;
