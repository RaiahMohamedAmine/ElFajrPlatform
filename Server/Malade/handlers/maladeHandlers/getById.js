var maladeModel = require('../../Models/MaladeModel');

async function GetById (req,res) {
    if (!req.params.id) 
        res.status(400).json ({
            type :"Err",
            message :"Bad request"
        });
        maladeModel.findById (req.params.id, (err,malades)=>{
        if (err){
            res.status(500).json({
                type: "Err",
                message : "Server not responding"
            });
        };
      //  console.log (malades);
        res.status(200).json({
            type : "Info",
            message :"Getting Malade",
            malade : malades
        });
    });
};
module.exports =GetById ;