import '../../constants'
import setRdvs from './setRdvs';
import receiveRdvs from './receiveRdvs';
import requestRdvs from './requestRdvs';
import axios from 'axios';
import setRdvsDate from './setRdvsDate';
import config from '../../../middleware/config';
import {toastr} from 'react-redux-toastr';

const fetchRdvs = (date) => {
        return function (dispatch) {
                dispatch(setRdvsDate(date.dateRDV))
                dispatch(requestRdvs())
                axios({
                        method: "POST",
                        data :date,
                        url : config.URL+":"+ config.PORT+"/rdv/get/byDate",
                        headers :{
                            Authorization : "Bearer ",// + "token",
                            crossDomaine : true,
                            'Content-Type' : 'application/json'
                        }
                    }).then(response =>dispatch(setRdvs(response.data.rdvs)))
                    .then(response => dispatch(receiveRdvs())).catch (err=>{
                        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
                    });
        }
}

export default fetchRdvs