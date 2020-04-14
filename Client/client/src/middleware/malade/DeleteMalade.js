import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';

export default (id) => {
    axios({
        method :"POST" ,
        url : "http://localhost:5200/malade/delete/"+id,
        headers :{
            Authorization : "Bearer ",// + "token" ,
            crossDomaine : true
        }
    }).then (res => {
        if (res.data.type ==="Err"){
            toastr.error('Erreur','La suppression a échoué')
            throw new Error(res.data.message)
        }else {
            toastr.success('Succés','Malade Supprimé')
            return res.data
        }
    })
}