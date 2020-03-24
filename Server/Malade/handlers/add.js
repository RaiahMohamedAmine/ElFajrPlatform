var Model = require('../DBModel');

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
    var malade = new Model(req.body);
    malade.save ((err,malade) => {
        if (err) {
            res.json({
                type:'Err',
                message : "Erreur ! Le malade n'a pas ete ajoute"
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