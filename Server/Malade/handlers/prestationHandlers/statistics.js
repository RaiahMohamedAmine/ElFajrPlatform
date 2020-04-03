var PrestationModel = require ('../../Models/PrestationModel');

async function GetStatistics (req,res){
    PrestationModel.find ({annee :new Date().getFullYear ()}, {_id:0, idMalade:0}, (err, prestations)=>{
        if (err) {
            res.status(500).json({
                type:'Err',
                message : "Server not responding"
            })
            return;
        };
        var motifSocialeStats={
            'Aide alimentaire':0,
            'Aide en habillement':0,
            'Aide matérielle':0,
            'Aide pour fetes':0,
            'Aide occasions religieuses':0,
            'GENERAL' :0,
        };

        var motifMedicaleStats={
            'Imagerie' :0,
            'Consultation générale' :0,
            'Consultation spécialisée':0,
            'Analyse labo':0,
            'Médicament' :0,
            'Para pharmacie' :0,
            'GENERAL' :0
        };

        var montantSocialeStats= {
            'Aide alimentaire':0,
            'Aide en habillement':0,
            'Aide matérielle':0,
            'Aide pour fetes':0,
            'Aide occasions religieuses':0,
            'GENERAL' :0,
        };

        var montantMedicaleStats= {
            'Imagerie' :0,
            'Consultation générale' :0,
            'Consultation spécialisée':0,
            'Analyse labo':0,
            'Médicament' :0,
            'Para pharmacie' :0,
            'GENERAL' :0
        };

        prestations.forEach(prestation => {
            if (prestation.type==='medicale' ) {
                motifMedicaleStats[prestation.motif]++;
                motifMedicaleStats["GENERAL"]++;
                montantMedicaleStats[prestation.motif]+=prestation.montant ;
                montantMedicaleStats['GENERAL']+=prestation.montant ;
            } 
            else {
                motifSocialeStats[prestation.motif]++;
                motifSocialeStats["GENERAL"]++;
                montantSocialeStats[prestation.motif]+=prestation.montant;
                montantSocialeStats['GENERAL']+=prestation.montant;
            }

        });
        res.status(200).json({
            type:'Info',
            message : "Gettin Statistics",
            motifMedicaleStats,
            motifSocialeStats,
            montantSocialeStats,
            montantMedicaleStats,

        });
    });
};

module.exports= GetStatistics;