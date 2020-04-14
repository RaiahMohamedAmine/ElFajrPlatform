import axios from 'axios';

export default (id)=>{
    return axios ({
        method: "POST",
        url : "http://localhost:5200/rdv/"+id,
        headers :{
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'application/json'
        }
    }).then (res=>{
        if (res.data.type==="Err")
            throw new Error (res.data.message);
        else
            console.log (res.data.rdvs);
            return res.data.rdvs
    })
};