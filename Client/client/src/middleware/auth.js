import axios from 'axios';

export default (token)=> 
    axios ({
        method: 'POST',
        url: 'http://localhost:5200/auth',
        headers : {
            Authorization :'Bearer ', //+ token,
            crossDomaine : true
        },
        data : token
    }).then (res => {
       if (res.data.type ==='Err'){
            return false
       }
       else
       {
           return true
       }
    });