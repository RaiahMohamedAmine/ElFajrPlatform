var mongoose = require ('mongoose')

var schema = mongoose.Schema 

var MaladeShema = new schema({
    id : {
        type: String,
        require : true
    },
    nom : {
        type: String,
        require : true
    },
    prenom : {
        type: String,
        require : true
    },
    DateNaissance : {
        type: String,
        require : true
    },
    Adresse : {
        type: String,
        require : true
    },
    SituationFamilliale : {
        type: String,
        require : true
    },
    Assure : {
        type: Boolean,
        require : true
    },
    Fonction : {
        type: String,
        require : true
    },
    Tel : {
        type: Array,
        require : true
    },
    TypeCancer : {
        type: String,
        require : true
    },
    MedecinTraitant : {
        type: String,
        require : false
    },
    Endroit : {
        type: String,
        require : true
    },
    id : {
        type: String,
        require : true
    },
})

module.exports = mongoose.model('Malade', MaladeShema)