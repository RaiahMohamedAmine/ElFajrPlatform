import requestPres from './requestPres';
import receivePres from './receiverPres';
import setPrestation from './setPrestation';
import GetPrestationBureau from '../../../middleware/prestation/GetPrestationBureau';


const fetchPresBureau = () => {
    return function (dispatch) {
        dispatch(requestPres())
        GetPrestationBureau()
            .then(res => dispatch(setPrestation(res.prestations)))
            .then(res => dispatch(receivePres()))
    }
}

export default fetchPresBureau