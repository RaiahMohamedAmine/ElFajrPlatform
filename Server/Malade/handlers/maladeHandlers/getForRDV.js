var MaladeModel = require ('../../Models/MaladeModel');

async function GetForRdv (req,res) {
    if (!req.params.id)
    {
        res.json ({
            type: "Err",
            message : "No Id"
        });
    };
    MaladeModel.findById (req.params.id,{nom:1, prenom:1, tel:1, photoIdentite:1},(err,malade)=> {
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
            message : 'RDV trouve',
            malade
        });
    });
};

module.exports= GetForRdv ;