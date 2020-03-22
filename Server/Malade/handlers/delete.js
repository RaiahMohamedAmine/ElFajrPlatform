var Model = require ('../DBModel')

function Delete (req, res) {
    Model.deleteOne ({id :req.body.id}, (err)=>{
        if (err) 
            res.json({type: "Err", message : "Malade non trouve"})
        else   
            res.json({type:"Info", message : "Malade supprime"})
    })
}

module.exports = Delete
