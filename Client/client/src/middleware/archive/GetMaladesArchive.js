import axios from 'axios';

export default (data) => {
    return axios({
        method: "POST",
        data,
        url: "http://localhost:5200/getMaladesArchive",
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