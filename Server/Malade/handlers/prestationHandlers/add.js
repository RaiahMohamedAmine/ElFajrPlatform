var prestationModel = require('../../Models/PrestationModel');

async function Add (req,res) {
    if(!req.body)
    {
        res.json ({
            type:"Err",
            message : "No body"
        });
        return;
    }
    var nvlPrestation = new prestationModel(req.body);
    nvlPrestation.save((err,prestation)=>{
        if (err)
        {
            res.json({
                type:"Err",
                message:"Server not responding"
            });
            return;
        }
        res.josn({
            type:"Info",
            message:"Prestation Ajoutee",
            prestation
        });
    });
} 

module.exports= Add;