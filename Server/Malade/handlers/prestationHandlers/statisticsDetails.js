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
    PrestationModel.find ({annee :req.params.year},{_id:0, idMalade:0,annee:0}, (err, prestations)=>{
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
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Aide en habillement',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Aide matérielle',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Aide pour fetes',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Aide occasions religieuses',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'GENERAL',
                montant : Array.from(Array(13), ()=> 0)
            },
        ];

        var medicalStats =[
            {
                name :'Imagerie',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Consultation générale',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Consultation spécialisée',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Analyse labo',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Médicament',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'GENERAL',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Para pharmacie',
                montant : Array.from(Array(13), ()=> 0)
            },
            
        ];

        var bureauStats =[
            {
                name :'Fournitures de Bureau',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Frais de transport',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Dépenses Para-pharmacie',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Aides Sociales',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Facture d\'électricité',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'GENERAL',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Facture d\'eau',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Facture de Telephone Fixe',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Rechargement crédit',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Cartes prépayés Internet',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Prime pour les secretaires',
                montant : Array.from(Array(13), ()=> 0)
            },
            {
                name :'Sensibilisation',
                montant : Array.from(Array(13), ()=> 0)
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
            const index = parseInt(prestation.date.substring(5,7))-1;
            stat.montant[index]+=prestation.montant;
            Stats[5].montant[index]+=prestation.montant;
            //General du par motif + par GENERAL
            stat.montant[12]+=prestation.montant;
            Stats[5].montant[12]+=prestation.montant;
            return true;
        }
    });
};

module.exports= GetStatistics;