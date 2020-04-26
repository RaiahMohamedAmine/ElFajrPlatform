var MaladeModel = require('../../Models/MaladeModel');

async function GetStatistics (req,res) {
    MaladeModel.find ({},{_id:0, sexe:1, dateNaissance :1, situationFamilliale:1, type:1, assure:1, adherent :1}, (err,malades)=>{
        if (err) {
            res.status(500).json({
                type:'Err',
                message : "Server not responding"
            })
            return;
        };
        var sexeStats=[
           {
                name :'Masculin' ,
                value: 0
            } ,
            {
                name :'Féminin' ,
                value: 0
            } ,
        ];
        var ageStats =[
            {
                name :'0 à 10' ,
                value: 0
            } ,
            {
                name :'10 à 20' ,
                value: 0
            } ,
            {
                name :'20 à 30' ,
                value: 0
            } ,
            {
                name :'30 à 40' ,
                value: 0
            } ,
            {
                name :'40 à 50' ,
                value: 0
            } ,
            {
                name :'50 à 60' ,
                value: 0
            } ,
            {
                name :'60 à 70' ,
                value: 0
            } ,
            {
                name :'70 à 80' ,
                value: 0
            } 
        ]
        var situationStats= [
            {
                name :'marie(e)' ,
                value: 0
            } ,
            {
                name :'celibataire' ,
                value: 0
            } ,
            {
                name :'veuf(ve)' ,
                value: 0
            } ,
            {
                name :'divorce(e)' ,
                value: 0
            }
        ];

        var typeStats= [
            {
                name :'Poumon' ,
                value: 0
            } ,
            {
                name :'Sang' ,
                value: 0
            } ,
            {
                name :'Foie' ,
                value: 0
            } ,
            {
                name :'Sein' ,
                value: 0
            } ,
            {
                name :'Prostate' ,
                value: 0
            } ,
            {
                name :'Vessie' ,
                value: 0
            } ,
            {
                name :'Peau' ,
                value: 0
            } ,
            {
                name :'Colorectal' ,
                value: 0
            } ,
            {
                name :'Utérus' ,
                value: 0
            } ,
            {
                name :'Estomac' ,
                value: 0
            } ,
            {
                name :'Gorge' ,
                value: 0
            }
        ];

        var assureStats= [
            {
                name :'Oui' ,
                value: 0
            } ,
            {
                name :'Non' ,
                value: 0
            } ,
        ];

        var adherentStats=[
            {
                name :'Oui' ,
                value: 0
            } ,
            {
                name :'Non' ,
                value: 0
            } ,
        ];

        malades.forEach(malade => {
            malade.sexe==='Male' ? sexeStats[0].value++ : sexeStats[1].value++;
            setAge (malade.dateNaissance, ageStats);
            setSituation (malade.situationFamilliale,situationStats);
            setType (malade.type, typeStats);
            if (malade.assure) assureStats[0].value++;
            else    assureStats[1].value++;

            if (malade.adherent) adherentStats[0].value++;
            else    adherentStats[1].value++;
        });
        res.status(200).json ({
            type : 'Info',
            message : 'Getting Statistics ',
            sexeStats,
            ageStats,
            situationStats,
            typeStats,
            assureStats,
            adherentStats
        });
    });    
};

const calculateAge = (dateBirth) => {
    if (!(dateBirth == null)) {
        const year = Number(dateBirth.substring(0, 4));
        const month = Number(dateBirth.substring(5, 7) - 1);
        const day = Number(dateBirth.substring(8, 10));
        var today = new Date();
        var age = today.getFullYear() - year;

        if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day))
            age--;
        return age;
    }
};
const setAge=  (dateBirth,ageStats)=>{
    const age = calculateAge (dateBirth)-1;
    const indice = age/10 >>0; 
    ageStats[indice].value++;
};

const setSituation = (situationMalade, situationStats)=>{
    situationStats.some(situation=>{
        if (situationMalade===situation.name)
        {
            situation.value++;
            return true;
        };
    });
};

const setType = (typeMalade, typeStats)=>{
    typeStats.some(type=>{
        if (typeMalade===type.name)
        {
            type.value++;
            return true;
        };
    });
};
module.exports= GetStatistics;