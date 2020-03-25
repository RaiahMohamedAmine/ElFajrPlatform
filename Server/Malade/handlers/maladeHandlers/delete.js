var maladeModel = require('../../Models/MaladeModel');

function Delete (req, res) {
    maladeModel.findByIdAndDelete (req.body._id, (err,malade)=>{
        if (err) 
            res.json({type: "Err", message : "Server not responding"});
        else   
            res.json({type:"Info", message : "Malade supprime" ,malade});
    });
};

module.exports = Delete;
