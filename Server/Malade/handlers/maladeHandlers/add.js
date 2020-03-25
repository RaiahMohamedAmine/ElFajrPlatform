var maladeModel = require('../../Models/MaladeModel');

async function Add (req, res)
{
    if (req.body===null) {
        res.json({
            type:'Err',
            message : 'no body '
        })
        return
    };
    console.log (req.body);
    req.body.photoIdentite = req.files['photoIdentite'].data;
    req.body.anapathe = req.files['anapathe'].data;
    req.files['radio']?  req.body.radio = req.files['radio'].data : req.body.radio = null;
    var malade = new maladeModel(req.body);
    malade.save ((err,malade) => {
        if (err) {
            res.json({
                type:'Err',
                message : "Server not responding"
            })
            return
        }
        res.json ({
            type : 'Info',
            message : 'Malade Ajoute',
            malade
        });
    });
};
module.exports= Add;