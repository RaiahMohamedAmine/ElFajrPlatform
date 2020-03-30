var MaladeModel = require ('../../Models/MaladeModel');

async function GetByIdForItem (req,res) {
    if (!req.params.id)
    {
        res.status(400).json ({
            type: "Err",
            message :"Bad request"
        });
    };
    MaladeModel.findById (req.params.id,{nom:1, prenom:1, dateNaissance:1, adresse:1, photoIdentite:1},(err,malade)=> {
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
            malade
        });
    });
};

module.exports= GetByIdForItem ;