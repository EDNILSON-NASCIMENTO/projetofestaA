const mongoose = require('mongoose');

const PartySchema = new mongooose.Schema({
    title : {
        type: String,
        required : true
    },
    description : {
        type: String
    },
    partyDate : {
        type : Date
    },
    photos : {
        type : Array
    },
    privacy : {
        type : Boolean
    },
    userId : {
        type : mongoose.Objectid
    }
});

const Party = mongoose.model('Party', PartySchema);
module.exports = Party;