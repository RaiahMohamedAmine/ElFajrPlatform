import axios from 'axios' ;

export default (data) => {
    return axios ({
        method: "POST" ,
        data :data ,
        url : "http://localhost:5200/add",
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
    })
}