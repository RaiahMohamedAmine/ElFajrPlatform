import React from 'react';
import './changer-mdp.css';
import { withRouter } from 'react-router';
import PassField from '../Components/Presentationals/Form-Items/password-field';
import Button from '../Components/Presentationals/Buttons/button';
import ChangePass from '../middleware/ChangePass';
import Dialog from '../Components/Presentationals/Dialogs/dialog';
import MainPage from './home';
import {toastr} from 'react-redux-toastr';

const ChangeMDP = ({ history }) => {
    let oldPass = '';
    let newPass = '';
    return <div>
        <Dialog type='xs' onClose={e=>  history.push('/')}>
            <form className='change-mdp-form' onSubmit={e => {
                e.preventDefault();
                ChangePass({ oldPass, newPass }).then(res => {
                    if (res.data.type === 'Err') {
                        toastr.error ('Erreur', "L'ancien mot de passe fourni est erroné")
                    }
                    else {
                        toastr.success ('Succes !' , "Le mot de passe a bien ete changé")
                        history.push('/');
                    }
                });
            }}>
                <PassField onChange={e => { oldPass = e.target.value }} title="Ancien mot de passe"></PassField>
                <hr></hr>
                <PassField onChange={e => { newPass = e.target.value }} title="Nouveau mot de passe" option="nouveau"></PassField>
                <div className='change-mdp-form-btn'>
                    <Button>Changer</Button>
                </div>
            </form>
        </Dialog>
        <MainPage />
    </div>
}

export default withRouter(ChangeMDP);