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

const MaladeForm = ({
    onClose = f => f,
    initValues={},
    modify=false,
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
        adherent: true,
        tel: '',
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
                                if (index === 0) {
                                    navigation.next()
                                }
                            }
                        } />
                    <PhotoForm formdata={formValues}
                        modify
                        onSubmit={
                            e => {
                                e.preventDefault()
                                navigation.next()
                            }
                        }
                        goBack={navigation.previous} />
                    <RadioForm formdata={formValues}
                        onSubmit={
                            e => {
                                e.preventDefault();
                                var formdata = new FormData();
                                const items = ['_id', 'nom', 'prenom', 'sexe', 'dateNaissance', 'assure', 'situationFamilliale', 'type', 'adresse', 'adherent', 'tel',
                                    'fonction', 'photoIdentite', 'anapathe', 'radio'];
                                items.forEach((item) => {
                                    formdata.append(item, formValues[item]);
                                });
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