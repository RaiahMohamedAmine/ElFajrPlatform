var rdv = require('../handlers/rdvHandlers/index');
module.exports= (app)=>{
    app.post('/addRdv',rdv.Add);
    app.post('/getRdv/:id',rdv.GetById);
    app.post('/getRdvByDate',rdv.GetByDate);
    app.post('/deleteRdv',rdv.Delete);
};