var maladeModel = require('../../Models/MaladeModel');

function Modify (req, res) {
    if (!req.body){
        res.status(400).json ({
            type:"Err",
            message :"Bad request"
        });
        return;
    }
    if (req.files)
    {
        if (req.files.photoIdentite)    req.body.photoIdentite = req.files['photoIdentite'].data;
        if (req.files.anapathe)    req.body.anapathe = req.files['anapathe'].data;
        if (req.files.radio)       req.body.radio = req.files['radio'].data;
    }    
    maladeModel.findByIdAndUpdate (req.body._id, req.body , (err, malade)=>{
        if(err) {
            res.status(500).json({
                type : "Err" ,
                message : "Server not responding"
            })
        }
        else{
            res.status(200).json({
                type : "Info" ,
                message : "La modification effectuee",
                malade 
            })
        }
    }) ;
}
module.exports = Modify
