var ArchiveModel = require('../../Models/ArchiveModel');

async function GetById (req, res) {
    if (!req.params.id)
    {
        res.json ({
            type: "Err" ,
            message : "Bad request"
        });
        return;
    }
    ArchiveModel.findById (req.params.id,(err, maladeArchive) => {
        if (err) {
            res.json ({
                type: "Err" ,
                message : "Server not responding"
            });
            return;
        }   
        res.json ({
            type :"Info",
            message :"Getting Malade in Archives",
            maladeArchive
        });
    });
} ;
module.exports = GetById;