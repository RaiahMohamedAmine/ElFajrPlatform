import axios from 'axios'
import requestPres from './requestPres';
import receivePres from './receiverPres';
import setPrestation from './setPrestation';
import GetPrestationById from '../../../middleware/prestation/GetPrestationById';


const fetchPres = (id) => {
    return function (dispatch) {
        dispatch(requestPres())
        GetPrestationById(id)
            .then(res => dispatch(setPrestation(res.prestations)))
            .then(res => dispatch(receivePres()))
    }
}

export default fetchPres