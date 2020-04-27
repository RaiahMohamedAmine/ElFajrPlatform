var ArchiveModel = require('../../Models/ArchiveModel');

async function GetStatistics (req,res) {
    ArchiveModel.find ({},{_id:0, sexe:1, dateNaissance :1, situationFamilliale:1, type:1, etat:1}, (err,malades)=>{
        if (err) {
            res.status(500).json({
                type:'Err',
                message : "Server not responding"
            })
            return;
        };

        var sexeStats=[
            {
                 name :'Homme' ,
                 value: 0
             } ,
             {
                 name :'Femme' ,
                 value: 0
             } ,
        ];
        var ageStats =[
             {
                 name :'0To10' ,
                 value: 0
             } ,
             {
                 name :'10To20' ,
                 value: 0
             } ,
             {
                 name :'20To30' ,
                 value: 0
             } ,
             {
                 name :'30To40' ,
                 value: 0
             } ,
             {
                 name :'40To50' ,
                 value: 0
             } ,
             {
                 name :'50To60' ,
                 value: 0
             } ,
             {
                 name :'60To70' ,
                 value: 0
             } ,
             {
                 name :'70To80' ,
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
 
         var etatStats= [
             {
                 name :'mort' ,
                 value: 0
             } ,
             {
                 name :'gueri' ,
                 value: 0
             } ,
         ];
        malades.forEach(malade => {
            malade.sexe==='Male' ? sexeStats[0].value++ : sexeStats[1].value++;
            setAge (malade.dateNaissance, ageStats);
            setSituation (malade.situationFamilliale,situationStats);
            setType (malade.type, typeStats);
            malade.etat==='mort' ? etatStats[0].value++ : etatStats[1].value++;
        });
        res.status(200).json ({
            type : 'Info',
            message : 'Getting Statistics ',
            sexeStats,
            ageStats,
            situationStats,
            typeStats,
            etatStats
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