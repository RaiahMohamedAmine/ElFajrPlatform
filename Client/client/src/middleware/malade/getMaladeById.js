import axios from 'axios';

export default (id) => {
    return axios({
        method: "POST",
        url: "http://localhost:5200/get/"+id,
        headers: {
            Authorization: "Bearer",// + "token" ,
            crossDomaine: true
        }
    }).then((res) => {
            if (res.data.type === "Err")
                throw new Error(res.data.type);
            else {
                return res.data.malade;
            }
    });
}