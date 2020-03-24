var Model = require ('../DBModel');

function Delete (req, res) {
    Model.findByIdAndDelete (req.body._id, (err,malade)=>{
        if (err) 
            res.json({type: "Err", message : "Malade non trouve"});
        else   
            res.json({type:"Info", message : "Malade supprime" ,malade});
    });
};

module.exports = Delete;
