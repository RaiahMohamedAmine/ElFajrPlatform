import React from 'react'; 
import { withRouter } from 'react-router';
import TextField from '../Components/Presentationals/Form-Items/text-field'; 
import Button from '../Components/Presentationals/Buttons/button'; 
import ChangePass from '../middleware/ChangePass';
import '../Base.css';

const ChangeMDP = ({history})=>{
    let oldPass= '';
    let newPass= '';
    return <div>
                <form className='login-form' onSubmit={e => {
                    e.preventDefault();
                    ChangePass ({oldPass,newPass}).then (res=>{
                        if (res.data.type==='Err') {
                            console.log (res.data.message);
                        }
                        else {
                            console.log ('MDP CHaNGER');
                            history.push ('/');
                        }
                    });
                }}>
                    <h5>Ancien Mot de passe :</h5>
                    <TextField onChange={e => { oldPass = e.target.value }} type="password"></TextField>
                    <h5>Nouveau Mot de passe :</h5>
                    <TextField onChange={e => { newPass = e.target.value }}  type="password"></TextField>
                    <Button>Changer</Button>
                </form>
        </div>
}

export default withRouter(ChangeMDP);