import axios from 'axios';

export default (cookies)=> {
    return axios ({
        method: 'POST',
        data : cookies,
        url: 'http://localhost:5200/VerifyAuth',
        headers : {
            Authorization :'Bearer ', //+ token,
            crossDomaine : true
        },
    });
}