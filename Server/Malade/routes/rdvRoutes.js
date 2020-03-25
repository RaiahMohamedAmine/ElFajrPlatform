var Add = require ('../handlers/rdvHandlers/add');
var GetById = require ('../handlers/rdvHandlers/getById');
var GetByDate = require ('../handlers/rdvHandlers/getByDate');

module.exports= (app)=>{
    app.post('/addRdv',Add);
    app.post('/getRdv/:id',GetById);
    app.post('/getRdvByDate',GetByDate);
};