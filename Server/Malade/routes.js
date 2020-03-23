var Add = require ('./handlers/add');
var Get = require ('./handlers/get');
var GetById = require ('./handlers/getById');
var Delete = require ('./handlers/delete');
var Update = require ('./handlers/modify');

module.exports= (app)=>{
    app.post('/get', Get);
    app.post('/get/:id', GetById);
    app.post('/add', Add);
    app.post('/delete', Delete);
    app.post('/modify', Update);
};