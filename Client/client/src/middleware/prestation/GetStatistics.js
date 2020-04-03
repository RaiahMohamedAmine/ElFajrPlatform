import axios from 'axios' ;

export default () => {
    return axios ({
        method: "POST" ,
        url : "http://localhost:5200/prestation/statistics",
        headers : {
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'multipart/form-data'
        }
    }).then (res => {
        if (res.data.type ==="Err")
            throw new Error (res.data.message)
        else
            return res.data
    });
};