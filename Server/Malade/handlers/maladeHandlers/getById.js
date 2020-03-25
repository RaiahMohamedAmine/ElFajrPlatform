var maladeModel = require('../../Models/MaladeModel');

async function GetById (req,res) {
    if (!req.params.id) 
        res.json ({
            type :"Err",
            message :"No Id"
        });
        maladeModel.findById (req.params.id, (err,malades)=>{
        if (err){
            res.json({
                type: "Err",
                message : "Server not responding"
            });
        };
      //  console.log (malades);
        res.json({
            type : "Info",
            message :"Getting Malade",
            malade : malades
        });
    });
};
module.exports =GetById ;