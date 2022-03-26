const mongoose = require('mongoose');

const { stringify } = require('querystring');

const visitorsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    nic:{
        type: String,
        required: true
    },
    password:{
        type: String
    }
});

module.exports= Visitor = mongoose.model('visitors', visitorsSchema);