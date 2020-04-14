import axios from 'axios';
import { toastr } from 'react-redux-toastr';

export default (data) => {
    return axios({
        method: "POST",
        data,
        url: "http://localhost:5200/prestation/delete",
        headers: {
            Authorization: "Bearer ",// + "token",
            crossDomaine: true,
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.data.type === "Err"){
            toastr.error('Erreur','La suppression a échoué')
            throw new Error(res.data.message)
        }
        else{
            toastr.success('Succés','Préstation supprimée')
            return res.data
        }
    });
};