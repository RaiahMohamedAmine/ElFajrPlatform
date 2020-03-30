var RdvModel = require ('../../Models/RdvModel');

async function Delete (req,res) {
    if (!req.body)
    {
        res.status(400).json ({
            type: "Err",
            message :"Bad request"
        });
    };
    RdvModel.findOneAndDelete ({dateRDV : req.body.dateRDV, idMalade : req.body.idMalade},(err,rdvs)=> {
        if (err)
        {
            res.status(500).json ({
                type :"Err",
                message : "Server not responding"
            });
            return;
        };
        res.status(200).json({
            type :'Info',
            message : 'RDV Supprimee',
            rdvs
        });
    });
};

module.exports= Delete ;