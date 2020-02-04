var jwt = require('jsonwebtoken');

var VerifyToken =(req,res,next)=> {
    var header = req.headers['Authorization'];
    if (!header) {res.json({
        type:'Err',
        message: 'No Header'
    })
    return };
    var token = header.split(' ')[1];
    jwt.verify (token,process.env.ACCES_TOKEN, (err,user)=> {
        if (err) res.json({
            type: 'Err',
            message : 'Not Authenticated'
        })
        else {
            res.json({
                type: 'Info' ,
                info :'Authenthicated' ,
                user : user
            }) ;
            next ();
        }
    })
}

var createToken = (user,res)=> {
    jwt.sign(user,process.env.ACCES_TOKEN, (err,token)=> {
        if (err) res.json({
            type: 'Err',
            message: 'Error While logging'
        });
        else{
            res.json({
                type : 'Info', 
                message : 'Logged in',
                cookie: token
            })
        }
    })
}

var DeleteToken =(res)=>{
    res.clearCookie('jwt');
    res.redirect('/');
} 


module.exports ={
    createToken,
    VerifyToken,
    DeleteToken
};
