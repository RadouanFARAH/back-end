const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');



const feedbackSchema = new Schema({

    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    firstname: {type:String},
    lastname: {type:String},
    telnum: {type:Number},
    email: {type:String},
    agree: {type:Boolean},
    contacttype: {type:String},
    message: {type:String}

},{ 
    timestamps: true

});


Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback; 