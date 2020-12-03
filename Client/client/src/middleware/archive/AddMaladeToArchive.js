import axios from 'axios';
import { toastr } from 'react-redux-toastr'
import config from '../config';

export default (data) => {
    return axios({
        method: "POST",
        data,
        url: config.URL+":"+ config.PORT+"/archive/add",
        headers: {
            Authorization: "Bearer ",// + "token",
            crossDomaine: true,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.data.type === "Err") {
            toastr.error('Erreur', "L'archivage a échoué. Veuillez Réessayez")
        }
        else {
            toastr.success('Succés','Malade Archivé')
            return res.data
        }
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
};