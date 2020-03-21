import React from 'react'
import './add-form.css'
import Dialog from './dialog'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from './progress-bar';
import PageView from './page-view';
import { useStep, useForm } from 'react-hooks-helper'
import PersonalForm from './personal-form';
import PhotoForm from './photo-form';

const AddForm = ({

}) => {
    const { index = 1, navigation } = useStep({ steps: 3 })
    const [formData, setValue] = useForm({
        id: '',
        nom: '',
        prenom: '',
        sexe: 'Male',
        assure: false,
        situationFamiliale: 'Marie(e)',
        adresse: '',
        adherent: true,
        tel: '',
        fonction: ''
    });
    return <Dialog>
        <div className='add-form'>
            <div className='af-bar'>
                <ProgressBar currentStep={index + 1} steps={["Personal Info", "Photos", "Rendez-vous"]}></ProgressBar>
            </div>
            <div className='af-body'>
                <PageView currentPage={index + 1}>
                    <PersonalForm formdata={formData} onChange={setValue}
                        onSubmit={
                            e => {
                                e.preventDefault()
                                if (index === 0) {
                                    navigation.next()
                                }
                            }
                        } />
                       <PhotoForm />
                       <PersonalForm/> 
                </PageView>
            </div>
        </div>
    </Dialog>
}

export default AddForm