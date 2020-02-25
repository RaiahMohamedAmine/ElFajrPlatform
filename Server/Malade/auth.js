var jwt = require('jsonwebtoken');

var VerifyToken =(cookies,res)=> {
    var token = cookies.jwt;
    if(token ===null) return false ;
    else {
        jwt.verify (token,process.env.ACCES_TOKEN, (err, user)=> {
            if (err) res.json({
                type: 'Err',
                message: 'Error Not Loggined'
            });
            else{
                res.json ({
                    type: 'Info', 
                    message : 'Logged In' ,
                    user
                })
            }
        })
    }
}

var createToken = (user,res)=> {
    jwt.sign(user,process.env.ACCES_TOKEN, (err,token)=> {
        if (err) res.json({
            type: 'Err',
            message: 'Error While logging'
        });
        else{
            res.json ({
                type: 'Info', 
                message : 'Logged In' ,
                cookie : token
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
