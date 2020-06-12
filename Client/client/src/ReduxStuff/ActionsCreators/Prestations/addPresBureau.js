import fetchPresBureau from './fetchPresBureau';
import receivePres from './receiverPres';
import requestPres from './requestPres';
import AddPrestation from '../../../middleware/prestation/AddPrestation';

const addPresBureau = (prestation) => {
    return function (dispatch) {
        dispatch(requestPres())
        AddPrestation(prestation)
        .then(response => dispatch(fetchPresBureau()))
            .then(response => dispatch(receivePres()))
    }
}

export default addPresBureau