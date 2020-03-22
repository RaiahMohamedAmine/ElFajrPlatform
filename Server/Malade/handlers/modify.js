var Model = require ('../DBModel')

function Modify (req, res) {
    req.body.PhotoIdentite = req.files['PhotoIdentite'].data;
    Model.updateOne ({id: req.body.id}, req.body , (err, raw)=>{
        if(err) {
            res.json({
                type : "Err" ,
                message : "Erreur ! La modification na pas reussi"
            })
        }
        else{
            res.json({
                type : "Info" ,
                message : "La modification effectuee"
            })
        }
    })
}
module.exports = Modify
