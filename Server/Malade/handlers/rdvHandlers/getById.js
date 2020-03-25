var RdvModel = require ('../../Models/RdvModel');

async function GetById (req,res) {
    if (!req.params.id)
    {
        res.json ({
            type: "Err",
            message : "No Id"
        });
    };
    RdvModel.find ({idMalade : req.params.id},(err,rdvs)=> {
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
            message : 'RDV Ajoute',
            rdvs
        });
    });
};

module.exports= GetById ;