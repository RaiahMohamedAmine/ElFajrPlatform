var Model = require ('../DBModel');

async function GetById (req,res) {
    if (!req.body.key) 
        res.json ({
            type :"Err",
            message :"No Id"
        });
    Model.find ({id : req.body.key}, (err,malades)=>{
        if (err){
            res.json({
                type: "Err",
                message :"Fatal Error"
            });
        };
        if (malades.length===0){
                res.json({
                    type : "Err",
                    message : "No Malade"
                });
        }
        if (malades.length===1){
            res.json({
                type : "Info",
                message :"Getting Malade",
                malade : malades
            });
        }
    });
};
module.exports =GetById ;