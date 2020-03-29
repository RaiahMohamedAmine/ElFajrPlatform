var prestationModel = require('../../Models/PrestationModel');

async function GetByYear (req,res){
    if(!req.params.year)
    {
        res.json({
            type:"Err",
            message :"No year"
        });
        return;
    }
    prestationModel.find({annee: req.params.year}, (err,prestations)=>{
        if(err)
        {
            res.json({
                type:"Err",
                message:"Server not responding"
            });
            return;
        }
        res.json({
            type:"Info",
            message:"Prestations trouvees",
            prestations
        });
    });
}

module.exports = GetByYear;