var ArchiveModel = require('../../Models/ArchiveModel');

async function Get (req, res) {
    ArchiveModel.find ({},{nom:1,prenom:1,photoIdentite:1,dateArchive:1,etat:1},(err, maladesArchive) => {
        if (err) {
            res.status(500).json ({
                type: "Err" ,
                message : "Server not responding"
            });
            return;
        }   
        res.status(200).json ({
            type :"Info",
            message :"Getting Malades in Archives",
            maladesArchive
        });
    });
} ;
module.exports = Get;