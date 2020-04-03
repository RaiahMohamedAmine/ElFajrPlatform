import requestRdvm from './requestRdvm';
import receiveRdvm from './receiveRdvm';
import axios  from 'axios';
import fetchRdvm from './fetchRdvm';


const deleteRdvm = (data) => {
    return function (dispatch) {
        dispatch(requestRdvm())
        axios ({
            method: "POST",
            data : data,
            url : "http://localhost:5200/rdv/delete",
            headers :{
                Authorization : "Bearer ",// + "token",
                crossDomaine : true,
                'Content-Type' : 'application/json'
            }
        }).then(response => dispatch(fetchRdvm(data.idMalade)))
             .then(response => dispatch(receiveRdvm()))
    }
}

export default deleteRdvm