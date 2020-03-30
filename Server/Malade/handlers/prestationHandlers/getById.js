var prestationModel = require('../../Models/PrestationModel');

async function GetById (req,res){
    if(!req.params.id)
    {
        res.status(400).json({
            type:"Err",
            message :"Bad request"
        });
        return;
    }
    prestationModel.find({ idMalade :req.params.id}, (err,prestations)=>{
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

module.exports = GetById;