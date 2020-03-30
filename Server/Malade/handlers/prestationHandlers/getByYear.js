var prestationModel = require('../../Models/PrestationModel');

async function GetByYear (req,res){
    if(!req.params.year)
    {
        res.status(400).json({
            type:"Err",
            message :"Bad request"
        });
        return;
    }
    prestationModel.find({annee: req.params.year}, (err,prestations)=>{
        if(err)
        {
            res.status(500).json({
                type:"Err",
                message:"Server not responding"
            });
            return;
        }
        res.status(200).json({
            type:"Info",
            message:"Prestations trouvees",
            prestations
        });
    });
}

module.exports = GetByYear;