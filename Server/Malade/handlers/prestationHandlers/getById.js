var prestationModel = require('../../Models/PrestationModel');

async function GetById (req,res){
    if(!req.params.id)
    {
        res.json({
            type:"Err",
            message :"No Id"
        });
        return;
    }
    prestationModel.find({ idMalade :req.params.id}, (err,prestations)=>{
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

module.exports = GetById;