var maladeModel = require('../../Models/MaladeModel');
const fs = require('fs');
const pdf = require('pdfkit');

async function Print (req,res) {
    if (!req.params.id) 
        res.status(400).json ({
            type :"Err",
            message :"Bad request"
        });
        maladeModel.findById (req.params.id, {_id:1,nom:1,prenom:1,adresse:1,dateNaissance:1,dateAdhesion:1,photoIdentite:1}, (err,malade)=>{
        if (err){
            res.status(500).json({
                type: "Err",
                message : "Server not responding"
            });
        };
        if (malade)
        {
            generatePDF(malade);
            res.status(200).json({
                type : "Info",
                message :"PDF généré",
            });
        }
        else {
            res.status(200).json({
                type : "Err",
                message :"Aucun Malade trouvée avec cet id",
            });
        }
    });
};
module.exports =Print ;

const generatePDF = (malade)=>{
   var doc = new pdf({size:[245,195],margin:0});
   doc.pipe(fs.createWriteStream('../../carte.pdf'));
   generateShape(doc);
   generateTemplate(doc);
   generateUser(doc,malade)
   doc.end();
};

const generateShape = (doc)=>{   
    doc.lineWidth(1)
    .roundedRect(10,10,220,160,10)
    .lineWidth(0.7)
    .moveTo(10, 63)
    .lineTo(230, 63)
    .lineWidth(0.7)
    .moveTo(10, 75)
    .lineTo(230, 75)
    .stroke()
};

const generateTemplate = (doc) => {
    doc
    .image('../../Client/client/src/assets/Logo.jpg',20,15,{width :45})
    .fontSize(9)
    .font('../../Client/client/src/assets/xbold.ttf')
    .text('ASSOCIATION << EL FEDJR >>',75,20)
    .text('Carte Malade',85,63)
    .font('../../Client/client/src/assets/bold.ttf')
    .fontSize(6)
    .text('d\'Aide aux  Personnes Atteintes de Cancer',80,33 )
    .text('Bureau de Dellys', 115,43)
    .text('La Présidente : ',25,146)
    .text('L\'intéressé(e) : ',95,146)
    .fontSize(7)
    .text('Nom : ',15,81)
    .text('Prenom : ',15,93)
    .text('Date de naissance : ',15,105)
    .text('Adresse : ',15,117)
    .text('Date d\'adhesion : ',15,129)
    .text('No : ',180,86)
    .font('../../Client/client/src/assets/font.ttf')
    .fontSize(6)
    .text('Mob : 0552.70.94.69 - 0658.22.36.27 - 0772.62.22.79',70,53)
    
};

const generateUser = (doc,malade)=>{
    if (typeof(malade.photoIdentite)==='object' )
    {
        fs.writeFileSync('image.png',malade.photoIdentite.buffer, 'base64')
        doc.image('./image.png' ,170,98,{width:40,radius:10});
        fs.unlinkSync('image.png') ;
    }
    else
        doc.image("data:image/jpg;base64,"+malade.photoIdentite ,170,98,{width:40,radius:10});
    doc
        .font('../../Client/client/src/assets/xbold.ttf')
    if (malade.adresse.length>24){
        doc
        .fontSize(5)
        .text (malade.adresse,50,119)
    }
    else{
        doc
        .fontSize(7)
        .text (malade.adresse,55,117)
    }
        doc 
        .fontSize(7)
        .text (malade.nom,45,81)
        .text (malade.prenom,55,93)
        .text (malade.dateNaissance,91,105)
        .text (malade.dateAdhesion,85,129)
        .text (malade._id,200,86)
}