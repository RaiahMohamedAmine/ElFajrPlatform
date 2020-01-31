var mongoose = require ('mongoose')

var schema = mongoose.Schema 

var MaladeShema = new schema({
    prenom : {
        type: String,
        require : true
    },
    nom : {
        type: String,
        require : true
    },
    id : {
        type: String,
        require : true
    },
    PhotoIdentite : {
        type: Object,
        require : false
    },
   /* Adresse : {
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
    },*/
})
const Model = mongoose.model('Malade', MaladeShema, "malade")
module.exports = Model