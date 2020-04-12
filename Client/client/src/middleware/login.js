import axios from "axios";

export default (pass)=> {
    return axios ({
        method  :"POST",
        data : pass ,
        url : "http://localhost:5200/login"
    });
};