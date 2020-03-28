var prestationModel = require('../../Models/PrestationModel');

async function Delete (req,res){
    if(!req.body)
    {
        res.json({
            type:"Err",
            message :"No body"
        });
        return;
    }
    prestationModel.findOneAndDelete(req.body, (err,prestations)=>{
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
            message:"Prestations supprimees",
            prestations
        });
    });
}

module.exports = Delete;