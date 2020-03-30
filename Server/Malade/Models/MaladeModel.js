var mongoose = require ('mongoose')

var schema = mongoose.Schema 

var MaladeShema = new schema({
    _id : {
        type: String,
        required : true
    },
    nom : {
        type: String,
        required : true
    },
    prenom : {
        type: String,
        require : true
    },
    sexe : {
        type: String,
        required : true
    },
    dateNaissance :{
        type: String,
        required: true
    },
    lieu :{
        type :String,
        required :false
    },
    assure : {
        type: Boolean,
        required : true
    },
    situationFamilliale : {
        type: String,
        required : true
    },
    type: {
        type: String,
        required: true
    },
    adresse : {
        type: String,
        required : true
    },
    adherent : {
        type: Boolean,
        required : true
    },
    tel : {
        type: String,
        required : true
    },
    fonction : {
        type: String,
        required : true
    },
    photoIdentite : {
        type: Object,
        required : true
    },
    anapathe : {
        type: Object,
        required : true
    },
    radio : {
        type: Object,
        required : false
    }
})
const Model = mongoose.model('Malade', MaladeShema, "malade")
module.exports = Model