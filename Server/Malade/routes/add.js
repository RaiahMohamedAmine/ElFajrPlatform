var Router = require('express').Router()
var Model = require('../DBModel')


async function Add (req, res)
{
   // console.log (req)
    if (req.body===null) {
        res.json({
            type:'Err',
            message : 'no body '
        })
        return
    }
    console.log (req.body);
    console.log (req.files);
    /*
    req.body.PhotoIdentite = req.files['PhotoIdentite'].data;
   // console.log (req.body);
    var malade = new Model(req.body)
    malade.save (err => {
        if (err) {
            res.json({
                type:'Err',
                message : "Erreur ! Le malade n'a pas ete ajoute"
            })
            return
        }
        console.log("Ajoute")
        res.json ({
            type : 'Info',
            message : 'Malade Ajoute'
            
        })
    })*/
}

Router.post ('/add', Add) 

module.exports= Add
