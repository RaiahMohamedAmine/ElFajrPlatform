var maladeModel = require('../../Models/MaladeModel');

async function Add (req, res)
{
    if (!req.body) {
        res.status(400).json({
            type:'Err',
            message :"Bad request"
        })
        return
    };
    req.body.photoIdentite = req.files['photoIdentite'].data;
    req.body.anapathe = req.files['anapathe'].data;
    req.files['radio']?  req.body.radio = [req.files['radio'].data] : req.body.radio = []//null;
    var malade = new maladeModel(req.body);
    malade.save ((err,malade) => {
        if (err) {
            res.status(500).json({
                type:'Err',
                message : "Server not responding"
            })
            return
        }
        res.status(200).json ({
            type : 'Info',
            message : 'Malade Ajoute',
            malade
        });
    });
};
module.exports= Add;