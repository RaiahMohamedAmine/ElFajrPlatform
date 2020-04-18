var MaladeModel = require('../../Models/MaladeModel');

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
        res.status(200).json( {
            malade
        });
    });
};

module.exports = Exist;