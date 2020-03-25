var maladeModel = require('../../Models/MaladeModel');

async function Get (req, res) {
    maladeModel.find ((err, malades) => {
            if (err) {
                res.json ({
                    type: "Err" ,
                    message : "Server not responding"
                });
            }
            return malades;
        }).then (malades=> 
           {
                malades = malades.filter(malade=> {
                   return malade.nom.toUpperCase().includes(req.body.key.toUpperCase())
                   ||
                    malade.prenom.toUpperCase().includes(req.body.key.toUpperCase())
                    ||
                    malade.id.toUpperCase().includes (req.body.key.toUpperCase())
                });
               res.json ({type :"Info",  message: "Le malade est trouve" , malades});
            }
        );
} ;
module.exports = Get;