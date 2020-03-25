var Add = require ('../handlers/rdvHandlers/add');
var GetById = require ('../handlers/rdvHandlers/getById');
var GetByDate = require ('../handlers/rdvHandlers/getByDate');
var Delete = require ('../handlers/rdvHandlers/delete');

module.exports= (app)=>{
    app.post('/addRdv',Add);
    app.post('/getRdv/:id',GetById);
    app.post('/getRdvByDate',GetByDate);
    app.post('/deleteRdv',Delete);
};