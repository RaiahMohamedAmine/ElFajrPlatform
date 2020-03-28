var RdvModel = require ('../../Models/RdvModel');
var MaladeModel = require ('../../Models/MaladeModel');

async function GetByDate (req,res) {
    if (!req.body)
    {
        res.json ({
            type: "Err",
            message : "No body"
        });
    };

    RdvModel.find({dateRDV : req.body.dateRDV}).then(rdvs=>{
        var promises = rdvs.map (rdv=>{
           return MaladeModel.findById(rdv.idMalade,{nom:1, prenom:1, tel :1, photoIdentite:1}).catch (err=> 
            res.json ({
                type :"Err",
                message :"Server not responding",
                err
            }));
        });
        return Promise.all(promises).then (malades=> {
            var newRdvs=[];
            if (malades.length!==rdvs.length)
            {
                res.json({
                    type:"Err",
                    message :"Server not respondig"
                });
                return;
            }
            for (let i=0;i<malades.length;i++)
            {
                newRdvs.push({
                    id: malades[i]._id,
                    nom: malades[i].nom,
                    prenom : malades[i].prenom,
                    tel : malades[i].tel,
                    photoIdentite: malades[i].photoIdentite,
                    motif : rdvs[i].motif,
                    lieu : rdvs[i].lieu,
                });
            }
            return Promise.all (newRdvs).then (newRdvs=> {
                res.json({
                    type :'Info',
                    message : 'RDV trouve',
                    rdvs :newRdvs
                });
            });
        });
    });
};

module.exports= GetByDate ;