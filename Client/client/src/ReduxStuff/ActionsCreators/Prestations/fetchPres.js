import axios from 'axios'
import requestPres from './requestPres';
import receivePres from './receiverPres';
import setPrestation from './setPrestation';


const fetchPres=(id)=>{
    return function (dispatch) {
        dispatch(requestPres())
        axios ({
            method: "POST" ,
            url : "http://localhost:5200/getPrestation/"+id,
            headers : {
                Authorization : "Bearer ",// + "token",
                crossDomaine : true,
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then(res=> dispatch(setPrestation(res.data.prestations)))
        .then(res=> dispatch(receivePres()))
}
}

export default fetchPres