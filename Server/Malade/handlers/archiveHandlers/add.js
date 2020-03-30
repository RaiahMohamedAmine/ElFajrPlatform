var MaladeModel = require('../../Models/MaladeModel');
var ArchiveModel =require('../../Models/ArchiveModel');
var RdvMalade = require('../../Models/RdvModel');

async function Add (req,res){
    if (!req.params.id) {
        res.json({
            type: "Err",
            message :"Bad request"
        });
        return;
    }
    MaladeModel.findByIdAndDelete (req.params.id, (err,malade)=>{
        if (err)
        {
            res.json({
                type: "Err",
                message :"Server not responding"
            });
            return;
        }
        const newArchiveMalade = new ArchiveModel ({
            _id : malade._id ,
            nom : malade.nom, 
            prenom : malade.prenom ,
            sexe : malade.sexe ,
            dateNaissance : malade.dateNaissance ,
            situationFamilliale : malade.situationFamilliale,
            type : malade.type,
            adresse : malade.adresse ,
            tel : malade.tel,
            fonction : malade.fonction,
            photoIdentite : malade.photoIdentite
        }) ;
        newArchiveMalade.save ((err)=>{
            if (err){
                res.json ({
                    type:"Err",
                    message :"Server not responding"
                });
                return;
            };
            RdvMalade.deleteMany ({idMalade: malade._id}, (err)=>{
                if (err)
                {
                    res.json ({
                        type:"Err",
                        message :"Server not responding"
                    });
                    return;
                }
                res.json ({
                    type:"Info",
                    message :"Malade Archive"
                });
            });
        });
    });
};

module.exports = Add;