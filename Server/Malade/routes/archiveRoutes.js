var Archive = require('../handlers/archiveHandlers/index');

module.exports =(app)=>{
    app.post ('/archive/get',Archive.Get);
    app.post('/archive/add',Archive.Add);
    app.post ('/archive/:id',Archive.GetById);
}