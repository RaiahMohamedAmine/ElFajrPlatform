var malade = require ('../handlers/maladeHandlers/index');

module.exports= (app)=>{
    app.post('/get', malade.Get);
    app.post('/get/:id', malade.GetById);
    app.post('/add', malade.Add);
    app.post('/delete/:id', malade.Delete);
    app.post('/modify', malade.Update);
    app.post('/getForItem/:id',malade.GetByIdForItem)
};