import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';
import config from '../config';

export default (id) => {
    return axios({
            method : "POST" ,
            url : config.URL+":"+ config.PORT+"/malade/exist/"+id,
            headers: {
                Authorization : "Bearer",// + "token" ,
                crossDomaine : true
            }
        }).catch (err=>{
            toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
        });
} 