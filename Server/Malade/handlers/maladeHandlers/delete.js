var MaladeModel = require('../../Models/MaladeModel');
var RdvModel = require('../../Models/RdvModel');
var PrestationModel = require ('../../Models/PrestationModel');

function Delete (req, res) {
    if (!req.params.id)
        res.status(400).json({
            type :"Err",
            message :"No Id"
        });
    
   MaladeModel.findByIdAndDelete (req.params.id, (err)=>{
        if (err) 
            res.json({
                type: "Err", 
                message : "Server not responding"
            });
    }).then (()=>{
        RdvModel.deleteMany({idMalade: req.params.id}, (err)=>{
            if (err){
                res.json({
                    type :"Err",
                    message:"Server not responding"
                });
                return;
            }
        }).then(()=>{
            PrestationModel.deleteMany({idMalade: req.params.id}, (err)=>{
                if (err){
                    res.json({
                        type :"Err",
                        message:"Server not responding"
                    });
                    return;
                }
                res.json({
                    type:"Info",
                    message :"Malade Supprime"
                });
            });
        });
    });
};

module.exports = Delete;
