const mongoose = require('mongoose');  


const PinSchema = new mongoose.Schema({  
    title: String,
    author: String,
    image: String,
    description: String,
    height: Number,
    width: Number
});

mongoose.model('pins', PinSchema);

module.exports = mongoose.model('pins');