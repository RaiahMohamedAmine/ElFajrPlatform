import axios from 'axios';
import requestRdvm from './requestRdvm';
import fetchRdvm from './fetchRdvm';
import receiveRdvm from './receiveRdvm';


const addRdvm = (rdv) => {
    return function (dispatch) {
        dispatch(requestRdvm())
        axios({
            method: "POST",
            data: rdv,
            url: "http://localhost:5200/addRdv",
            headers: {
                Authorization: "Bearer ",// + "token",
                crossDomaine: true,
                'Content-Type': 'application/json'
            }
        })
            .then(response => dispatch(fetchRdvm(rdv.idMalade)))
            .then(response => dispatch(receiveRdvm()))
    }
}

export default addRdvm