var RdvModel = require ('../../Models/RdvModel');

async function GetById (req,res) {
    if (!req.params.id)
    {
        res.status(400).json ({
            type: "Err",
            message :"Bad request"
        });
    };
    RdvModel.find ({idMalade : req.params.id},(err,rdvs)=> {
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
            message : 'RDV trouve',
            rdvs
        });
    });
};

module.exports= GetById ;