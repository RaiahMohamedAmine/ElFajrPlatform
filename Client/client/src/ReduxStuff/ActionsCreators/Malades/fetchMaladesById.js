import setMalades from './setMalades';
import requestMalade from './requestMalades';
import receiveMalades from './receiveMalades';
import  axios from 'axios';
import config from '../../../middleware/config';
import {toastr} from 'react-redux-toastr';

const fetchMalades = (id) => {
        return function (dispatch) {
                dispatch(requestMalade())
                axios({
                        method : "POST" ,
                        url : config.URL+":"+ config.PORT+"/malade/get/forItem/"+id,
                        headers: {
                            Authorization : "Bearer",// + "token" ,
                            crossDomaine : true
                        }
                    }).then(response => dispatch(setMalades(response.data.malade)))
                    .then(response => dispatch(receiveMalades())).catch (err=>{
                        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
                    });
        }

}

export default fetchMalades