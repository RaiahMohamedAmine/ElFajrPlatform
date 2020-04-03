import  axios  from 'axios';
import setRdvm from './setRdvm';
import receiveRdvm from './receiveRdvm';
import requestRdvm from './requestRdvm';


const fetchRdvm=(id)=>{
    return function (dispatch) {
        dispatch(requestRdvm())
        axios ({
            method: "POST",
            url : "http://localhost:5200/rdv/"+id,
            headers :{
                Authorization : "Bearer ",// + "token",
                crossDomaine : true,
                'Content-Type' : 'application/json'
            }
        }).then(res=> dispatch(setRdvm(res.data.rdvs)))
        .then(res=> dispatch(receiveRdvm()))
}
}

export default fetchRdvm