import fetchPres from './fetchPres';
import receivePres from './receiverPres';
import requestPres from './requestPres';
import AddPrestation from '../../../middleware/prestation/AddPrestation';

const addPres = (prestation) => {
    return function (dispatch) {
        dispatch(requestPres())
        AddPrestation(prestation)
        .then(response => dispatch(fetchPres(prestation.idMalade)))
            .then(response => dispatch(receivePres()))
    }
}

export default addPres