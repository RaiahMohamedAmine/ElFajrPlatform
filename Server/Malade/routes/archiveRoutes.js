var Archive = require('../handlers/archiveHandlers/index');

module.exports =(app)=>{
    app.post('/addMaladeToArchive/:id',Archive.Add);
    app.post ('/getMaladesArchive',Archive.Get);
    app.post ('/getMaladeArchive/:id',Archive.GetById);
}