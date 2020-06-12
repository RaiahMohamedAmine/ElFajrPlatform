var mongoose = require ('mongoose');

var rdvSchema = mongoose.Schema({
    dateRDV :{
        type : String,
        required :true
    },
    idMalade :{
        type: String,
        required : true
    },
    lieu : {
        type : String,
        required : true
    },
    motif : {
        type :String,
        required : true
    },
    details :{
        type :String,
        required : false
    }
});

var rdvModel = mongoose.model('RDV', rdvSchema, 'rdv');

module.exports=rdvModel;