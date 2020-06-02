var MaladeModel = require('../../Models/MaladeModel');
var ArchiveModel = require('../../Models/ArchiveModel');

async function Exist (req,res) {
    if (!req.params.id)
        res.status(400).json({
            type :"Err",
            message :"Bad request"
        });
    MaladeModel.findById (req.params.id, {_id:1} ,(err,malade)=>{
        if (err) 
            res.status(500).json({
                type: "Err", 
                message : "Server not responding"
            });
        if (malade)
            res.status(200).json({malade});
        else {
            ArchiveModel.findById (req.params.id, {_id:1}, (err,malade)=>{
                res.status(200).json( {
                    malade
                });
            });
        }   
    });
};

module.exports = Exist;