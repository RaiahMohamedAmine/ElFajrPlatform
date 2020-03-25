var RdvModel = require ('../../Models/RdvModel');

async function Add (req,res) {
    if (!req.body)
    {
        res.json ({
            type: "Err",
            message : "No Body"
        });
    };
    var newRdv = new RdvModel (req.body);
    newRdv.save ((err,rdv)=> {
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
            rdv
        });
    });
};

module.exports= Add ;