var mongoose = require ('mongoose')

var ArchiveSchema = new mongoose.Schema({
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
    tel : {
        type: String,
        required : true
    },
    fonction : {
        type: String,
        required : true
    },
    date : {
        type: String,
        required : true
    },
    etat : {
        type: String,
        required : true
    },
    lieu : {
        type: String,
        required : false
    },

    photoIdentite : {
        type: Object,
        required : true
    }, 
    dateArchive: {
        type: String,
        required:true
    },
    etat :{
        type: String ,
        required :true
    }
});
const archiveModel = mongoose.model('Archive', ArchiveSchema, "archive")
module.exports = archiveModel