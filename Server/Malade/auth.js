var jwt = require('jsonwebtoken');

var VerifyToken =(req,res,next)=> {
    var token = req.cookies["jwt"]
    if(token ===null) res.sendStatus (404)
    else {
        jwt.verify (token,process.env.ACCES_TOKEN, (err, user)=> {
            if(err) res.redirect ('/login')
            else{
                req.user = user
                console.log(req.user)
                next()
            }
        })
    }
   /* var header = req.headers['Authorization'];
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
    })*/
}

var createToken = async (user,res)=> {
    jwt.sign(user,process.env.ACCES_TOKEN, (err,token)=> {
        if (err) res.json({
            type: 'Err',
            message: 'Error While logging'
        });
        else{
            res.token = token
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
