import axios from 'axios';
import config from '../config';
import {toastr} from 'react-redux-toastr'

export default (id) => {
    return axios({
        method: "POST",
        url: config.URL+":"+ config.PORT+"/malade/"+id,
        headers: {
            Authorization: "Bearer",// + "token" ,
            crossDomaine: true
        }
    }).then((res) => {
            if (res.data.type === "Err")
            toastr.error('Erreur', "Une Erreur a survenue. Veuillez Réessayez !")
            else {
                return res.data.malade;
            }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
}