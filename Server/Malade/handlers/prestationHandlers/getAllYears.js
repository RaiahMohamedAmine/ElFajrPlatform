var prestationModel = require('../../Models/PrestationModel');

async function GetAllYears (req,res) {
    prestationModel.distinct('annee',(err,years)=>{
    if (err) 
        {
            res.status(500).json({
                type:"Err",
                message:"Server not responding"
            });
            return;
        }
        years.sort(sortArray)
        res.status(200).json({
            type:"Info",
            message:"Annees recuperees",
            years
        });
        return;
        
    })
} 

const sortArray = (a,b)=> {
    if  (a===b)
        return 0;
    return a>b? -1:1;
}
module.exports= GetAllYears;