import axios from 'axios' ;
import config from '../config';
import {toastr} from 'react-redux-toastr';

export default (year= new Date().getFullYear()) => {
    return axios ({
        method: "POST" ,
        url : config.URL+":"+ config.PORT+"/prestation/statistics/"+year,
        headers : {
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'multipart/form-data'
        }
    }).then (res => {
        if (res.data.type ==="Err")
        toastr.error('Erreur', "Une Erreur a survenue. Veuillez Reéssayez !");
        else
            return res.data
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
};