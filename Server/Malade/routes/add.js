var Router = require('express').Router()
var Model = require('../DBModel')


async function Add (req, res)
{
    if (!req.body) {
        res.json({
            type:'error',
            message : 'no body '
        })
        return
    }
    console.log(req.body)
    var malade = new Model(req.body)
    malade.save (err => {
        if (err) {
            res.json({
                type:'error',
                message : "Erreur ! Le malade n'a pas ete ajoute"
            })
            return
        }
        console.log("Ajoute")
        res.json ({
            type : 'Nice',
            message : 'Malade Ajoute'
        })
    })
}

Router.post ('/add', Add) 

module.exports= Add
