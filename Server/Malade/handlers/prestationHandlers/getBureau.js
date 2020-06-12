var prestationModel = require('../../Models/PrestationModel');

async function GetBureau (req,res){
    prestationModel.find({type: 'bureau'}, (err,prestations)=>{
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

module.exports = GetBureau;