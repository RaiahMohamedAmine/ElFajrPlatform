import axios from "axios";

export default (user)=> {
    return axios ({
        method  :"POST",
        data : user ,
        url : "http://localhost:5200/login"
    })
}