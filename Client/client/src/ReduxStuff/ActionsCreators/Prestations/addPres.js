import axios from 'axios'
import fetchPres from './fetchPres';
import receivePres from './receiverPres';
import requestPres from './requestPres';

const addPres = (prestation) => {
    return function (dispatch) {
        dispatch(requestPres())
        axios({
            method: "POST",
            data: prestation,
            url: "http://localhost:5200/addPrestation",
            headers: {
                Authorization: "Bearer ",// + "token",
                crossDomaine: true,
                'Content-Type' : 'application/json'            }
        }).then(res => {
            if (res.data.type === "Err") throw new Error(res.data.message)
            else return res.data
        })
        .then(response => dispatch(fetchPres(prestation.idMalade)))
            .then(response => dispatch(receivePres()))
    }
}

export default addPres