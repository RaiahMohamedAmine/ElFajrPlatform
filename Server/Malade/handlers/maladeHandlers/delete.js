var MaladeModel = require('../../Models/MaladeModel');
var RdvModel = require('../../Models/RdvModel');
function Delete (req, res) {
    if (!req.params.id)
        res.status(400).json({
            type :"Err",
            message :"No Id"
        });
    
   MaladeModel.findByIdAndDelete (req.params.id, (err,malade)=>{
        if (err) 
            res.json({
                type: "Err", 
                message : "Server not responding"
            });
            console.log(malade)
    }).then (()=>{
        RdvModel.deleteMany({idMalade: req.params.id}, (err,rdvs)=>{
            if (err){
                res.json({
                type :"Err",
                message:"Server not respondig"
                });
                return;
            }
            res.json({
                type:"Info",
                message :"Malade Deleted",
                rdvs
            });
        });
    });
};

module.exports = Delete;
