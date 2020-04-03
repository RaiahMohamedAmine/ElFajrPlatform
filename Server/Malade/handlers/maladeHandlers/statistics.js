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
        var sexeStats={
           Male :0 ,
           Female: 0
        };
        var ageStats ={
            "0To10" :0,
            "10To20" :0,
            "20To30": 0,
            "30To40" : 0,
            "40To50" : 0,
            "50To60" : 0,
            "60To70" : 0,
            "70To80": 0
        };
        var situationStats= {
            'marie(e)':0,
            'celibataire':0,
            'veuf(ve)' :0,
            'divorce(e)' :0
        };

        var typeStats= {
            'Poumon':0,
            'Sang':0,
            'Foie':0,
            'Sein':0,
            'Prostate':0,
            'Vessie':0,
            'Peau':0,
            'Colorectal':0,
            'Utérus':0,
            'Estomac':0,
            'Gorge':0,
        };

        var assureStats= {
            "Oui" :0 ,
            "Non" :0
        };

        var adherentStats= {
            "Oui" :0 ,
            "Non" :0
        };

        malades.forEach(malade => {
            sexeStats[malade.sexe]++;
            setAge (malade.dateNaissance, ageStats);
            situationStats[malade.situationFamilliale]++;
            typeStats[malade.type]++;
            if (malade.assure) assureStats['Oui']++;
            else    assureStats['Non']++;

            if (malade.adherent) adherentStats['Oui']++;
            else    adherentStats['Non']++;
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
    const age = calculateAge (dateBirth);
    if (age>=0 && age<=10)
                ageStats["0To10"]++;
            else    
                if (age>10 && age<=20)
                    ageStats['10To20']++;
                else
                    if(age>20 && age<=30)
                        ageStats['20To30']++;
                    else    
                        if (age>30 && age<=40)
                            ageStats['30To40']++;
                        else    
                            if (age>40 && age<=50)
                                ageStats['40To50']++;    
                            else    
                                if (age>50 && age<=60)
                                    ageStats['50To60']++;
                                else    
                                    if (age>60 && age<=70)
                                        ageStats['60To70']++;
                                    else    
                                        if (age>70 && age<=80)
                                            ageStats['70To80']++;
}
module.exports= GetStatistics;