var prestationModel = require('../../Models/PrestationModel');

async function Delete (req,res){
    if(!req.body)
    {
        res.status(400).json({
            type:"Err",
            message :"Bad request"
        });
        return;
    }
    prestationModel.findOneAndDelete(req.body, (err,prestations)=>{
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
            message:"Prestations supprimees",
            prestations
        });
    });
}

module.exports = Delete;