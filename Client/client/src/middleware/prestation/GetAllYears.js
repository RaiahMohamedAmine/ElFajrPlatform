import axios from 'axios';
import config from '../config';
import {toastr} from 'react-redux-toastr';

export default () => {
    return axios({
        method: "POST",
        url: config.URL+":"+ config.PORT+"/prestation/getAllYears",
        headers: {
            Authorization: "Bearer ",// + "token",
            crossDomaine: true,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.data.type === "Err")
            throw new Error(res.data.message)
        else
            return res.data
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
};