var PrestationModel = require ('../../Models/PrestationModel');

async function GetStatistics (req,res){
    if (!req.params.year)
    {
        res.status(400).json ({
            type:"Err",
            message :"Bad request"
        });
        return;
    }
    PrestationModel.find ({annee :req.params.year},{_id:0, idMalade:0}, (err, prestations)=>{
        if (err) {
            res.status(500).json({
                type:'Err',
                message : "Server not responding"
            })
            return;
        };
        var socialeStats =[
            {
                name :'Aide alimentaire',
                nb: 0,
                montant :0
            },
            {
                name :'Aide en habillement',
                nb: 0,
                montant :0
            },
            {
                name :'Aide matérielle',
                nb: 0,
                montant :0
            },
            {
                name :'Aide pour fetes',
                nb: 0,
                montant :0
            },
            {
                name :'Aide occasions religieuses',
                nb: 0,
                montant :0
            },
            {
                name :'GENERAL',
                nb: 0,
                montant :0
            },
        ];

        var medicalStats =[
            {
                name :'Imagerie',
                nb: 0,
                montant :0
            },
            {
                name :'Consultation générale',
                nb: 0,
                montant :0
            },
            {
                name :'Consultation spécialisée',
                nb: 0,
                montant :0
            },
            {
                name :'Analyse labo',
                nb: 0,
                montant :0
            },
            {
                name :'Médicament',
                nb: 0,
                montant :0
            },
            {
                name :'GENERAL',
                nb: 0,
                montant :0
            },
            {
                name :'Para pharmacie',
                nb: 0,
                montant :0
            },
            
        ];

        var bureauStats =[
            {
                name :'Fournitures de Bureau',
                nb: 0,
                montant :0
            },
            {
                name :'Frais de transport',
                nb: 0,
                montant :0
            },
            {
                name :'Dépenses Para-pharmacie',
                nb: 0,
                montant :0
            },
            {
                name :'Aides Sociales',
                nb: 0,
                montant :0
            },
            {
                name :'Facture d\'électricité',
                nb: 0,
                montant :0
            },
            {
                name :'GENERAL',
                nb: 0,
                montant :0
            },
            {
                name :'Facture d\'eau',
                nb: 0,
                montant :0
            },
            {
                name :'Facture de Telephone Fixe',
                nb: 0,
                montant :0
            },
            {
                name :'Rechargement crédit',
                nb: 0,
                montant :0
            },
            {
                name :'Cartes prépayés Internet',
                nb: 0,
                montant :0
            },
            {
                name :'Prime pour les secretaires',
                nb: 0,
                montant :0
            },
            {
                name :'Sensibilisation',
                nb: 0,
                montant :0
            },
        ]
        prestations.forEach(prestation => {
           switch(prestation.type){
               case 'medicale' : {
                   setStats(prestation,medicalStats);
                   break;
                }
               case 'sociale' : {
                    setStats(prestation,socialeStats);
                    break;
                }  
                case 'bureau' : {
                    setStats(prestation,bureauStats);
                    break;
                } 
                default : break;
           }
        });
        res.status(200).json({
            type:'Info',
            message : "Gettin Statistics",
            medicalStats,
            socialeStats,
            bureauStats
        });
    });
};

const setStats = (prestation, Stats)=>{
    Stats.some(stat=>{
        if (prestation.motif=== stat.name)
        {
            stat.nb++;
            stat.montant+=prestation.montant;
            Stats[5].nb++;
            Stats[5].montant+=prestation.montant;
            return true;
        }
    });
};

module.exports= GetStatistics;