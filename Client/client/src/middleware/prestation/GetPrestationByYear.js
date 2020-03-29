import axios from 'axios';

export default (year) => {
    return axios({
        method: "POST",
        url: "http://localhost:5200/getPrestationByYear/" + year,
        headers: {
            Authorization: "Bearer ",// + "token",
            crossDomaine: true,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.data.type === "Err")
            throw new Error(res.data.message)
        else
            return res.data
    });
};