import React from 'react'
import './malade-form.css'
import Dialog from '../Dialogs/dialog'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from '../progress-bar';
import PageView from '../page-view';
import { useStep, useForm } from 'react-hooks-helper'
import PersonalForm from './personal-form';
import PhotoForm from './photo-form';
import AddMalade from '../../../middleware/AddMalade';

const AddForm = ({
    onClose = f => f,
}) => {
    const { index = 1, navigation } = useStep({ steps: 3 })
    const [formValues, setValue] = useForm({
        id: '',
        nom: '',
        prenom: '',
        sexe: 'Male',
        assure: false,
        situationFamilliale: 'Marie(e)',
        type: 'Poumon',
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
                    <PersonalForm formdata={formValues} onChange={setValue}
                        onSubmit={
                            e => {
                                e.preventDefault()
                                if (index === 0) {
                                    navigation.next()
                                }
                            }
                        } />
                    <PhotoForm formdata={formValues}
                        onSubmit={
                            e => {
                                e.preventDefault()
                                navigation.next()
                            }
                        }
                        goBack={navigation.previous} />
                    <PhotoForm formdata={formValues} type='radio'
                        onSubmit={
                            e => {
                                e.preventDefault();
                                var formdata = new FormData();
                                const items = ['id', 'nom', 'prenom', 'sexe', 'assure', 'situationFamilliale', 'type', 'adresse', 'adherent', 'tel',
                                    'fonction', 'photoIdentite', 'anapathe', 'radio'];
                                items.forEach((item) => {
                                    formdata.append(item, formValues[item]);
                                });
                                AddMalade(formdata);
                                onClose(e)
                            }
                        }
                        goBack={navigation.previous} />
                </PageView>
            </div>
        </div>
    </Dialog>
}

export default AddForm