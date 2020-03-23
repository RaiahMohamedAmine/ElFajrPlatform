var mongoose = require ('mongoose')

var schema = mongoose.Schema 

var MaladeShema = new schema({
    _id : {
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
    sexe : {
        type: String,
        require : true
    },
    assure : {
        type: Boolean,
        require : true
    },
    situationFamilliale : {
        type: String,
        require : true
    },
    type: {
        type: String,
        required: true
    },
    adresse : {
        type: String,
        require : true
    },
    adherent : {
        type: Boolean,
        require : true
    },
    tel : {
        type: String,
        require : true
    },
    fonction : {
        type: String,
        require : true
    },
    photoIdentite : {
        type: Object,
        require : false
    },
    anapathe : {
        type: Object,
        require : true
    },
    radio : {
        type: Object,
        require : false
    }
})
const Model = mongoose.model('Malade', MaladeShema, "malade")
module.exports = Model