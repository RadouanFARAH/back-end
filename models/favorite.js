const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');
const Dish = require('./dishes');


const favoriteSchema = new Schema({

    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    dishes :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }]

},{ 
    timestamps: true

});


Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites; 