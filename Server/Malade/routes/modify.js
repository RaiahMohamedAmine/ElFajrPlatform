var Router =  require ('express').Router ()
var Model = require ('../DBModel')

function Modify (req, res) {
    req.body.PhotoIdentite = req.files['PhotoIdentite'];
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

Router.post('/modify', Modify)

module.exports = Modify