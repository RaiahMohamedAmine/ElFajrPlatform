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
        
        var socialeStats = {
            columns : [
                    {
                        dataField : 'mois',
                        text : 'Mois'
                    },
                    {
                        dataField : 'Aide alimentaire',
                        text : 'Aide alimentaire'
                    },
                    {
                        dataField : 'Aide en habillement',
                        text : 'Aide en habillement'
                    },
                    {
                        dataField : 'Aide matérielle',
                        text : 'Aide matérielle'
                    },
                    {
                        dataField : 'Aide pour fetes',
                        text : 'Aide pour fetes'
                    },
                    {
                        dataField : 'Aide occasions religieuses',
                        text : 'Aide occasions religieuses'
                    },
                    {
                        dataField : 'GENERAL',
                        text : 'GENERAL'
                    }
                ],
            data : [
                { mois :'Janvier', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Février', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Mars', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Avril', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Mai', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Juin', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Juillet', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Aout', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Septembre', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Octobre', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Novembre', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Decembre', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
                { mois :'Total', 'Aide alimentaire' :0, 'Aide en habillement' :0, 'Aide matérielle' :0, 'Aide pour fetes':0, 'Aide occasions religieuses':0, GENERAL:0},
            ]
        };

        var medicalStats = {
            columns : [
                    {
                        dataField : 'mois',
                        text : 'Mois'
                    },
                    {
                        dataField : 'Imagerie',
                        text : 'Imagerie'
                    },
                    {
                        dataField : 'Consultation générale',
                        text : 'Consultation générale'
                    },
                    {
                        dataField : 'Consultation spécialisée',
                        text : 'Consultation spécialisée'
                    },
                    {
                        dataField : 'Analyse labo',
                        text : 'Analyse labo'
                    },
                    {
                        dataField : 'Médicament',
                        text : 'Médicament'
                    },
                    {
                        dataField : 'Para pharmacie',
                        text : 'Para pharmacie'
                    },
                    {
                        dataField : 'GENERAL',
                        text : 'GENERAL'
                    }
                ],
            data : [
                { mois :'Janvier', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Février', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Mars', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Avril', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Mai', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Juin', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Juillet', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Aout', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Septembre', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Octobre', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Novembre', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Decembre', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
                { mois :'Total', Imagerie :0, 'Consultation générale' :0, 'Consultation spécialisée' :0, 'Analyse labo':0, 'Médicament':0, GENERAL:0,'Para pharmacie':0},
            ]
    };

    var bureauStats = {
        columns : [
                {
                    dataField : 'mois',
                    text : 'Mois'
                },
                {
                    dataField : 'Fournitures de Bureau',
                    text : 'Fournitures de Bureau'
                },
                {
                    dataField : 'Frais de transport',
                    text : 'Frais de transport'
                },
                {
                    dataField : 'Dépenses Para-pharmacie',
                    text : 'Dépenses Para-pharmacie'
                },
                {
                    dataField : 'Aides Sociales',
                    text : 'Aides Sociales'
                },
                {
                    dataField : 'Facture d\'électricité',
                    text : 'Facture d\'électricité'
                },
                {
                    dataField : 'Facture d\'eau',
                    text : 'Facture d\'eau'
                },
                {
                    dataField : 'Facture de Telephone Fixe',
                    text : 'Facture de Telephone Fixe'
                },
                {
                    dataField : 'Rechargement crédit',
                    text : 'Rechargement crédit'
                },
                {
                    dataField : 'Cartes prépayés Internet',
                    text : 'Cartes prépayés Internet'
                },
                {
                    dataField : 'Prime secretaires',
                    text : 'Prime secretaires'
                },
                {
                    dataField : 'Sensibilisation',
                    text : 'Sensibilisation'
                },
                {
                    dataField : 'GENERAL',
                    text : 'GENERAL'
                }
            ],
        data : [
            { mois :'Janvier', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Février', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Mars', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Avril', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Mai', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Juin', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Juillet', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Aout', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Septembre', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Octobre', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Novembre', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Decembre', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
            { mois :'Total', 'Fournitures de Bureau' :0, 'Frais de transport' :0, 'Dépenses Para-pharmacie' :0, 'Aides Sociales':0, 'Facture d\'électricité':0, GENERAL:0,'Facture d\'eau':0, 'Facture de Telephone Fixe':0
                ,'Rechargement crédit' :0, 'Cartes prépayés Internet':0, 'Prime secretaires' :0, 'Sensibilisation': 0
            },
        ]
    }

    if (req.params.year===new Date().getFullYear().toString())
    {
        const month = new Date().getMonth()+1;
        socialeStats.data.splice(month,12-month); 
        medicalStats.data.splice(month,12-month); 
        bureauStats.data.splice(month,12-month); 

        console.log(socialeStats.data)
    }
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
            Stats :{
                medicalStats,
                socialeStats,
                bureauStats
            }
        });
    });
};

const setStats = (prestation, Stats)=>{
    const index = parseInt(prestation.date.substring(5,7))-1;
    Stats.data[index][prestation.motif]+=prestation.montant;
    Stats.data[index].GENERAL+=prestation.montant;
    Stats.data[Stats.data.length-1][prestation.motif]+=prestation.montant;
    Stats.data[Stats.data.length-1].GENERAL+=prestation.montant;
};
module.exports= GetStatistics;