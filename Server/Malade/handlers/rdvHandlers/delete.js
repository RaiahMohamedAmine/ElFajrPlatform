var RdvModel = require ('../../Models/RdvModel');

async function Delete (req,res) {
    if (!req.body)
    {
        res.json ({
            type: "Err",
            message : "No body"
        });
    };
    RdvModel.findOneAndDelete ({dateRDV : req.body.dateRDV, idMalade : req.body.idMalade},(err,rdvs)=> {
        if (err)
        {
            res.json ({
                type :"Err",
                message : "Server not responding"
            });
            return;
        };
        res.json({
            type :'Info',
            message : 'RDV Supprimee',
            rdvs
        });
    });
};

module.exports= Delete ;