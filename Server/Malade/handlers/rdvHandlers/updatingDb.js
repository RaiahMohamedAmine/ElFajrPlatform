var rdvModel = require ('../../Models/RdvModel');

module.exports= () =>{
    rdvModel.deleteMany ({dateRDV: getInputDate ()}, err=>{
        if (err)  console.log (err);
    });
};

function getInputDate()
{
    var yesterday = new Date ();
    yesterday.setDate (yesterday.getDate ()-1);
    const date = yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate() ;
    const month = yesterday.getMonth() < 9 ? "0" + (yesterday.getMonth() + 1) : (yesterday.getMonth() + 1);
    return yesterday.getFullYear() + "-" + month + "-" + date
}