import fetchPresBureau from './fetchPresBureau';
import requestPres from './requestPres';
import receivePres from './receiverPres';
import DeletePrestation from '../../../middleware/prestation/DeletePrestation';


const deletePresBureau = (prestation) => {
    return function (dispatch) {
        dispatch(requestPres())
        DeletePrestation(prestation)
            .then(response => dispatch(fetchPresBureau()))
            .then(response => dispatch(receivePres()))
    }
}

export default deletePresBureau