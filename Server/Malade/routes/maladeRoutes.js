var Add = require ('../handlers/maladeHandlers/add');
var Get = require ('../handlers/maladeHandlers/get');
var GetById = require ('../handlers/maladeHandlers/getById');
var Delete = require ('../handlers/maladeHandlers/delete');
var Update = require ('../handlers/maladeHandlers/modify');
var GetByIdForItem = require ('../handlers/maladeHandlers/getByIdForItem');

module.exports= (app)=>{
    app.post('/get', Get);
    app.post('/get/:id', GetById);
    app.post('/add', Add);
    app.post('/delete/:id', Delete);
    app.post('/modify', Update);
    app.post('/getForItem/:id',GetByIdForItem)
};