import axios from 'axios';

export default (token)=> 
    axios ({
        method: 'POST',
        url: 'http://localhost:3000/auth',
        headers : {
            Authorization :'Bearer ', //+ token,
            crossDomaine : true
        },
        data : token
    }).then (res => {
       if (res.data.type ==='Err'){
            axios({
                method: 'GET',
                url :'http://localhost:3000/login'
            }).then (res=>{
                console.log(res);
            })
       }
    });