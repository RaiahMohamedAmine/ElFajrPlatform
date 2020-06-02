import React from 'react'
import './malade-form.css'
import Dialog from '../Dialogs/dialog'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from '../progress-bar';
import PageView from '../page-view';
import { useStep, useForm } from 'react-hooks-helper'
import PersonalForm from './personal-form';
import PhotoForm from './photo-form';
import RadioForm from './radio-form';
import FetchExist from '../../../middleware/malade/fetchExist' ;
import { toastr } from 'react-redux-toastr';

const MaladeForm = ({
    onClose = f => f,
    initValues={},
    modify=false,
    onPhotoClick,
    onSubmit
}) => {
    const { index = 1, navigation } = useStep({ steps: 3 })
    const [formValues, setValue] = useForm(
        modify ?
        initValues:
        {
        _id: '',
        nom: '',
        prenom: '',
        sexe: 'Male',
        dateNaissance: '',
        assure: true,
        situationFamilliale: 'marie(e)',
        type: 'Foie',
        adresse: '',
        lieu : '',
        adherent: true,
        tel: '',
        autreTel : '',
        fonction: '',
        photoIdentite: {},
        anapathe: {},
        radio: {}
    });
    return <Dialog onClose={onClose}>
        <div className='add-form'>
            <div className='af-bar'>
                <ProgressBar currentStep={index + 1} steps={["Personal Info", "Photos", "Radios"]}></ProgressBar>
            </div>
            <div className='af-body'>
                <PageView currentPage={index + 1}>
                    <PersonalForm formdata={formValues} initvalues={initValues} onChange={setValue} modify={modify}
                        onSubmit={
                            e => {
                                e.preventDefault()
                                if (modify){ 
                                    if (index === 0) {
                                        navigation.next()
                                    }
                                }
                                else {
                                    FetchExist(formValues._id).then (res=>{
                                        if (res.data.malade) {
                                            toastr.error ('Erreur !', "L'ID existe deja. Veuillez le changer")
                                        }
                                        else {
                                            console.log(res.data);
                                            if (index === 0) {
                                                navigation.next()
                                            }
                                        }
                                    });
                                }
                            }
                        } />
                    <PhotoForm formdata={formValues}
                        modify = {modify}
                        onPhotoClick={onPhotoClick}
                        onSubmit={
                            e => {
                                e.preventDefault()
                                navigation.next()
                            }
                        }
                        goBack={navigation.previous} />
                    <RadioForm formdata={formValues} modify= {modify}
                        onSubmit={
                            e => {
                                e.preventDefault();
                                var formdata = new FormData();
                                const items = ['_id', 'nom', 'prenom', 'sexe', 'dateNaissance', 'lieu','assure', 'situationFamilliale', 'type', 'adresse', 'adherent', 'tel', 
                                'autreTel', 'fonction', 'photoIdentite', 'anapathe', 'radio'];
                                items.forEach((item) => {
                                    formdata.append(item, formValues[item]);
                                });
                                if (!modify) formdata.append ('dateAdhesion',new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate())
                                console.log (formValues);
                                onSubmit(formdata);
                                onClose(e)
                            }
                        }
                        goBack={navigation.previous} />
                </PageView>
            </div>
        </div>
    </Dialog>
}

export default MaladeForm