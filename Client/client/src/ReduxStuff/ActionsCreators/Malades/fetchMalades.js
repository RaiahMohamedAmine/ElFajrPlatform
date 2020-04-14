import setMalades from './setMalades';
import requestMalade from './requestMalades';
import receiveMalades from './receiveMalades';
import axios from 'axios';
import getMalade from '../../../middleware/malade/getMalade';

const fetchMalades = (key) => {
        var data = { key };
        return function (dispatch) {
                dispatch(requestMalade())
                getMalade(data).then(response => dispatch(setMalades(response)))
                        .then(response => dispatch(receiveMalades()))
        }

}

export default fetchMalades