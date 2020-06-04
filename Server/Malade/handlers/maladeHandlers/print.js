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
   doc.pipe(fs.createWriteStream('./carte.pdf'));
   generateShape(doc);
   generateTemplate(doc);
   generateUser(doc,malade)
   doc.end();
};

const generateShape = (doc)=>{   
    doc.lineWidth(1)
    .roundedRect(10,10,220,175,10)
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
    .text('No : ',168,86)
    .font('../../Client/client/src/assets/font.ttf')
    .text('Tel/Fax 026.27.12.64 - Mob 0554.70.44.01',80,53)
    
};

const generateUser = (doc,malade)=>{
  //  var buf =  Buffer.from (malade.photoIdentite);
  //  var base64 = buf.toString('Binary');
    fs.writeFileSync('image.png',malade.photoIdentite, 'base64');
    doc
        .fontSize(7)
        .font('../../Client/client/src/assets/xbold.ttf')
        .text (malade.nom,45,81)
        .text (malade.prenom,55,93)
        .text (malade.dateNaissance,91,105)
        .text (malade.adresse,60,117)
        .text (malade.dateAdhesion,85,129)
        .text (malade._id,185,86)
        .image('./image.png' ,162,98,{width:50,radius:10});
    fs.unlinkSync('image.png') ;
}