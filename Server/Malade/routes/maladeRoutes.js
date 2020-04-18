var malade = require ('../handlers/maladeHandlers/index');

module.exports= (app)=>{
    app.post('/malade/get', malade.Get);
    app.post('/malade/add', malade.Add);
    app.post('/malade/modify', malade.Update);
    app.post('/malade/get/forItem/:id',malade.GetByIdForItem);
    app.post('/malade/delete/:id', malade.Delete);
    app.post ('/malade/statistics',malade.GetStatistics);
    app.post('/malade/exist/:id',malade.Exist);
    app.post('/malade/:id', malade.GetById);
};