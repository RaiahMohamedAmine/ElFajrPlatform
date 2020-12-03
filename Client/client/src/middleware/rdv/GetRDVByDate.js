import axios from 'axios';
import {toastr} from 'react-redux-toastr'
import config from '../config';

export default (data)=>{
    return axios ({
        method: "POST",
        data :data,
        url : config.URL+":"+ config.PORT+"/getRdvByDate",
        headers :{
            Authorization : "Bearer ",// + "token",
            crossDomaine : true,
            'Content-Type' : 'application/json'
        }
    }).then (res=>{
        if (res.data.type==="Err")
        toastr.error('Erreur', "Une Erreur a survenue. Veuillez Reéssayez !");
        else
            return res.data.rdvs
    }).catch (err=>{
        toastr.error ('Erreur Fatale !', 'Assurez-vous que le serveur est bien en marche');
    });
};