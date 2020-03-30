var ArchiveModel = require('../../Models/ArchiveModel');

async function Get (req, res) {
    ArchiveModel.find ((err, maladesArchive) => {
        if (err) {
            res.json ({
                type: "Err" ,
                message : "Server not responding"
            });
            return;
        }   
        res.json ({
            type :"Info",
            message :"Getting Malades in Archives",
            maladesArchive
        });
    });
} ;
module.exports = Get;