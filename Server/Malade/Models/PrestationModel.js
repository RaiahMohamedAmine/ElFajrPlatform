var mongoose = require('mongoose');

var prestationSchema = mongoose.Schema({
    idMalade :{
        type :String,
        required : true
    },
    date :{
        type :String,
        required : true
    },
    annee :{
        type : String,
        required :true
    },
    type:{
        type :String,
        required : true
    },
    montant :{
        type : Number,
        required :true
    },
    motif :{
        type :String,
        required : true
    }
});

var prestationModel = mongoose.model('Prestation',prestationSchema,'prestation');

module.exports = prestationModel;