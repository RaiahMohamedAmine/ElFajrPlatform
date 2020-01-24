import axios from 'axios' ;

export default (data) => {
    axios({
        method ="POST" ,
        data : data ,
        url : "http://localhost:3000/modify",
        headers :{
            Authorization : "Bearer " + "token" ,
            crossDomaine : true
        }
    }).then (res => {
        if (res.data.type ==="Err")
            throw new Error(res.data.message)
        return res.data
    })
}