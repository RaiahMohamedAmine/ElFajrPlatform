import axios from 'axios';

export default (data)=>{
    console.log (data)
    return axios ({
        method: "POST",
        data : data,
        url : "http://localhost:5200/addRdv",
        headers :{
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'application/json'
        }
    }).then (res=>{
        if (res.type==="Err")
            throw new Error (res.message);
        else
            console.log (res.rdv);
    })
};