var RdvModel = require ('../../Models/RdvModel');

async function Add (req,res) {
    if (!req.body)
    {
        res.status(400).json ({
            type: "Err",
            message :"Bad request"
        });
    };
    var newRdv = new RdvModel (req.body);
    newRdv.save ((err,rdv)=> {
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
            message : 'RDV Ajoute',
            rdv
        });
    });
};

module.exports= Add ;