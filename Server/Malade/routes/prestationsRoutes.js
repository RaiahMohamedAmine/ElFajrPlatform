var prestation = require ('../handlers/prestationHandlers/index');

module.exports= (app)=>{
    app.post('/addPrestation', prestation.Add);
    app.post('/getPrestation/:id', prestation.GetById);
    app.post('/getPrestationByYear/:year', prestation.GetByYear);
    app.post('/deletePrestation', prestation.Delete);
};