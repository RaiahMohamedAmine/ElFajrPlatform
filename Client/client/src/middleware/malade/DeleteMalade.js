import axios from 'axios' ;

export default (id) => {
    axios({
        method :"POST" ,
        url : "http://localhost:5200/delete/"+id,
        headers :{
            Authorization : "Bearer ",// + "token" ,
            crossDomaine : true
        }
    }).then (res => {
        if (res.data.type ==="Err")
            throw new Error(res.data.message)
        return res.data
    })
}