import axios from 'axios';
import config from './config';
import {toastr} from 'react-redux-toastr';

export default (pass)=> {
    return axios ({
        method: 'POST',
        data : pass,
        url: config.URL+":"+ config.PORT+'/changePass',
        headers : {
            Authorization :'Bearer ', //+ token,
            crossDomaine : true
        },
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });;
}