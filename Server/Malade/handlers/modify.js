var Model = require ('../DBModel');

function Modify (req, res) {
    if (req.files)
    {
        if (req.files.photoIdentite)    req.body.photoIdentite = req.files['photoIdentite'].data;
        if (req.files.anapathe)    req.body.anapathe = req.files['anapathe'].data;
        if (req.files.radio)       req.body.radio = req.files['radio'].data;
    }    
    Model.findByIdAndUpdate (req.body._id, req.body , (err, malade)=>{
        if(err) {
            res.json({
                type : "Err" ,
                message : "Erreur ! La modification na pas reussi"
            })
        }
        else{
            res.json({
                type : "Info" ,
                message : "La modification effectuee",
                malade 
            })
        }
    }) ;
}
module.exports = Modify
