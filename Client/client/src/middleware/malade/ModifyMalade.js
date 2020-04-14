import axios from 'axios' ;
import { toastr } from 'react-redux-toastr';

export default (data) => {
    axios({
        method :"POST" ,
        data : data ,
        url : "http://localhost:5200/malade/modify",
        headers :{
            Authorization : "Bearer ",// + "token" ,
            crossDomaine : true
        }
    }).then (res => {
        if (res.data.type ==="Err"){
            toastr.error('Erreur','La Modification a echoué ')
            throw new Error(res.data.message)
        }
        else{
            toastr.success('Succés','Malade modifié')
            return res.data
        }
    })
}