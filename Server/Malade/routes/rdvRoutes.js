var rdv = require('../handlers/rdvHandlers/index');
module.exports= (app)=>{
    app.post('/rdv/add',rdv.Add);
    app.post('/rdv/get/byDate',rdv.GetByDate);
    app.post('/rdv/delete',rdv.Delete);
    app.post('/rdv/:id',rdv.GetById);
};