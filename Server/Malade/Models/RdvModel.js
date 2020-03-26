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
    nom : {
        type :String,
        required :true
    },
    prenom : {
        type :String,
        required: true
    },
    tel  :{
        type : String,
        required :true
    },
    photoIdentite :{
        type :Object,
        required: true
    }
});

var rdvModel = mongoose.model('RDV', rdvSchema, 'rdv');

module.exports=rdvModel;