var Router = require ('express').Router ()
var Model =  require('../DBModel')


function Get (req, res) {
    Model.find ((err, malades) => {
        if (err) {
            res.json ({
                type: "Err" ,
                message : "Une Erreur est survenue ! Impossible de trouver des malades. Veuillez Reessayez"
            })
        }
        res.json ({type :"Info",  message: "Le malade est trouve" })
    })
}

Router.post('/get', Get)

module.exports ={
    Router,
    Get
}
