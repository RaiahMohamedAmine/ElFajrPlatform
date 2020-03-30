var ArchiveModel = require('../../Models/ArchiveModel');

async function GetById (req, res) {
    if (!req.params.id)
    {
        res.status(400).json ({
            type: "Err" ,
            message : "Bad request"
        });
        return;
    }
    ArchiveModel.findById (req.params.id,(err, maladeArchive) => {
        if (err) {
            res.status(500).json ({
                type: "Err" ,
                message : "Server not responding"
            });
            return;
        }   
        res.status(200).json ({
            type :"Info",
            message :"Getting Malade in Archives",
            maladeArchive
        });
    });
} ;
module.exports = GetById;