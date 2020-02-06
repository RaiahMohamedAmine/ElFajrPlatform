import axios from "axios";

export default (user)=> {
    axios ({
        method  :"POST",
        data : user ,
        url : "http://localhost:5200/login"
    }).then (res=> {
        if (res.data.type === 'Err') {
            throw new Error (res.data.message);
        }
    })
}