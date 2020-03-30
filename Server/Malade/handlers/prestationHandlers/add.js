var prestationModel = require('../../Models/PrestationModel');

async function Add (req,res) {
    console.log(req.body)
    if(!req.body)
    {
        res.status(400).json ({
            type:"Err",
            message :"Bad request"
        });
        return;
    }
    var nvlPrestation = new prestationModel(req.body);
    nvlPrestation.save((err,prestation)=>{
        if (err)
        {
            res.status(500).json({
                type:"Err",
                message:"Server not responding"
            });
            return;
        }
        res.status(200).json({
            type:"Info",
            message:"Prestation Ajoutee",
            prestation
        });
    });
} 

module.exports= Add;