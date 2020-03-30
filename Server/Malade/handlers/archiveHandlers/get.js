var ArchiveModel = require('../../Models/ArchiveModel');

async function Get (req, res) {
    ArchiveModel.find ((err, maladesArchive) => {
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