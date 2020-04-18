import requestPres from './requestPres';
import fetchPres from './fetchPres';
import receivePres from './receiverPres';
import DeletePrestation from '../../../middleware/prestation/DeletePrestation';


const deletePres = (prestation) => {
    return function (dispatch) {
        dispatch(requestPres())
        DeletePrestation(prestation)
            .then(response => dispatch(fetchPres(prestation.idMalade)))
            .then(response => dispatch(receivePres()))
    }
}

export default deletePres