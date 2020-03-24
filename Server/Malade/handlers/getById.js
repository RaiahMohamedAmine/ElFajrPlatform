var Model = require ('../DBModel');

async function GetById (req,res) {
    if (!req.params.id) 
        res.json ({
            type :"Err",
            message :"No Id"
        });
    Model.findById (req.params.id, (err,malades)=>{
        if (err){
            res.json({
                type: "Err",
                message :"Fatal Error"
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