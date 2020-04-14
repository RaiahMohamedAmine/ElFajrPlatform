import React from 'react';
import './changer-mdp.css';
import { withRouter } from 'react-router';
import TextField from '../Components/Presentationals/Form-Items/text-field';
import Button from '../Components/Presentationals/Buttons/button';
import ChangePass from '../middleware/ChangePass';
import Dialog from '../Components/Presentationals/Dialogs/dialog';
import MainPage from './home';

const ChangeMDP = ({ history }) => {
    let oldPass = '';
    let newPass = '';
    return <div>
        <Dialog type='xs' onClose={e=>  history.push('/')}>
            <form className='change-mdp-form' onSubmit={e => {
                e.preventDefault();
                ChangePass({ oldPass, newPass }).then(res => {
                    if (res.data.type === 'Err') {
                        console.log(res.data.message);
                    }
                    else {
                        console.log('MDP CHaNGER');
                        history.push('/');
                    }
                });
            }}>
                <h5>Ancien Mot de passe :</h5>
                <TextField onChange={e => { oldPass = e.target.value }} type='password'></TextField>
                <h5>Nouveau Mot de passe :</h5>
                <TextField onChange={e => { newPass = e.target.value }} type='password'></TextField>
                <div className='change-mdp-form-btn'>
                    <Button>Changer</Button>
                </div>
            </form>
        </Dialog>
        <MainPage />
    </div>
}

export default withRouter(ChangeMDP);