var maladeModel = require('../../Models/MaladeModel');

function Modify (req, res) {
    if (!req.body){
        res.status(400).json ({
            type:"Err",
            message :"Bad request"
        });
        return;
    }
    var radio =false;
    if (req.files)
    {
        if (req.files.photoIdentite)    req.body.photoIdentite = req.files['photoIdentite'].data;
        if (req.files.anapathe)    req.body.anapathe = req.files['anapathe'].data;
        if (req.files.radio)      {
            radio=true;
            if(req.files.radio.length)
            req.files.radio.forEach((file,i) => {
                req.files.radio[i]=file.data
            });
            else {
                req.files.radio=req.files.radio.data;
            }
        }
    }    
    radio ? 
    maladeModel.findByIdAndUpdate (req.body._id, {
        adresse : req.body.adresse,
        lieu : req.body.lieu,
        situationFamilliale :req.body.situationFamilliale, 
        tel :req.body.tel,
        fonction : req.body.fonction,
        adherent: req.body.adherent,
        assure: req.body.assure,
        photoIdentite: req.body.photoIdentite,
        anapathe : req.body.anapathe,
        $push :{
            radio : req.files.radio
        }
    }, (err, malade)=>{
        if(err) {
            res.status(500).json({
                type : "Err" ,
                message : "Server not responding"
            })
        }
        else{
            res.status(200).json({
                type : "Info" ,
                message : "La modification effectuee",
                malade 
            })
        }
    }) 
    :
    maladeModel.findByIdAndUpdate (req.body._id, req.body , (err, malade)=>{
        if(err) {
            res.status(500).json({
                type : "Err" ,
                message : "Server not responding"
            })
        }
        else{
            res.status(200).json({
                type : "Info" ,
                message : "La modification effectuee",
                malade 
            })
        }
    }) ;
}
module.exports = Modify
