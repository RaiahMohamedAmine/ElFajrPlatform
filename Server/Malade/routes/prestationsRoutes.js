var prestation = require ('../handlers/prestationHandlers/index');

module.exports= (app)=>{
    app.post('/prestation/add', prestation.Add);
    app.post('/prestation/delete', prestation.Delete);
    app.post('/prestation/statistics/:year', prestation.GetStatistics);
    app.post('/prestation/getAllYears', prestation.GetAllYears);
    app.post('/prestation/byYear/:year', prestation.GetByYear);
    app.post('/prestation/:id', prestation.GetById);
};