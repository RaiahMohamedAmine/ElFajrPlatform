import axios  from 'axios';
import requestPres from './requestPres';
import fetchPres from './fetchPres';
import receivePres from './receiverPres';


const deletePres = (prestation) => {
    return function (dispatch) {
        dispatch(requestPres())
        axios({
            method: "POST",
            data:prestation,
            url: "http://localhost:5200/prestation/delete",
            headers: {
                Authorization: "Bearer ",// + "token",
                crossDomaine: true,
                'Content-Type': 'application/json'
            }
        }).then(response => dispatch(fetchPres(prestation.idMalade)))
             .then(response => dispatch(receivePres()))
    }
}

export default deletePres