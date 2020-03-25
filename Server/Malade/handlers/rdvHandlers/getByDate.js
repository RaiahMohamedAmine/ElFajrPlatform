var RdvModel = require ('../../Models/RdvModel');

async function GetByDate (req,res) {
    if (!req.body)
    {
        res.json ({
            type: "Err",
            message : "No body"
        });
    };
    RdvModel.find ({dateRDV : req.body.dateRDV},(err,rdvs)=> {
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
            rdvs
        });
    });
};

module.exports= GetByDate ;