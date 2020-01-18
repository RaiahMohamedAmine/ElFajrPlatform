var Router = require('express').Router()
var Model = require ('../DBModel')

function Delete (req, res) {
    Model.deleteOne ({id :req.body.id}, (err)=>{
        if (err) 
            res.json({type: "Err", message : "Malade non trouve"})
        else   
            res.json({type:"Info", message : "Malade supprime"})
    })
}

Router.post('/delete/:id', Delete)

module.exports = Delete
